
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import { ICustomerPortal, IMemberShipPlan, ISession } from "../models/IMembership";
declare const Stripe:any;

@Injectable({
  providedIn: 'root'
})
export class StripeSubscriptionService {

  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getMembership(): Observable<IMemberShipPlan> {
    return of({
      id: 'prod_K0kc6MqC3YVNFw',
      priceId: 'price_1JMj6uLRzwdq8WffU49BAY5S',
      name: 'Awesome Membership Plan',
      price: '£10.00 GBP',
      features: [
        'Up to 5 tutors',
        'Email support',
        '50 students',
        'Free cancelation',
      ],
    });
  }

  requestMemberSession(priceId: string): void {
    this.http
      .post<ISession>(this.baseUrl + 'api/subscriptions/create-checkout-session', {
        priceId: priceId,
        successUrl: "http://localhost:4200/subscriptions/success",
        failureUrl: "http://localhost:4200/subscriptions/failure",
      })
      .subscribe((session) => {
        this.redirectToCheckout(session);
      });
  }

  redirectToCheckout(session: ISession) {
    const stripe = Stripe(session.publicKey);

    stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });
  }

  redirectToCustomerPortal() {
    this.http
      .post<ICustomerPortal>(
        this.baseUrl + 'api/subscriptions/customer-portal',
        { returnUrl: "http://localhost:4200/subscriptions" }
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








