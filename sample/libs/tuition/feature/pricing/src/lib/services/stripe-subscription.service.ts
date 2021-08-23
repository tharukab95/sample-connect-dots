import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PricingPlan } from '../models/Pricing';

declare const Stripe: any;

@Injectable({
  providedIn: 'root',
})
export class StripeSubscriptionService {
  baseUrl: string = 'http://localhost:3000/';
  subscriptionPlans: PricingPlan[] = [];

  constructor(private http: HttpClient) {}

  getCheckoutPlan(id: any): Observable<PricingPlan> {
    return of(this.subscriptionPlans[id]);
  }

  requestMemberSession(priceId: string): void {
    this.http
      .post<any>(
        this.baseUrl + 'api/subscriptions/create-checkout-session',
        {
          priceId: priceId,
          successUrl: 'http://localhost:4200/subscriptions/success',
          failureUrl: 'http://localhost:4200/subscriptions/failure',
        }
      )
      .subscribe((session) => {
        this.redirectToCheckout(session);
      });
  }

  redirectToCheckout(session: any) {
    const stripe = Stripe(session.publicKey);

    stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
  }

  redirectToCustomerPortal() {
    this.http
      .post<any>(
        this.baseUrl + 'api/subscriptions/customer-portal',
        { returnUrl: 'http://localhost:4200/subscriptions' }
      )
      .subscribe((data) => {
        window.location.href = data.url;
      });
  }

  getHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };

    return httpOptions;
  }
}
