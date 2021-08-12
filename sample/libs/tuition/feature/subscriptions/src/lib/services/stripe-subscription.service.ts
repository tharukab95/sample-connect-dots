
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

  membershipPlans = [
    {
      id: 'prod_JsyaUS7P4g02WW',
      priceId: 'price_1JFCdJLRzwdq8WffXaOWsnE0',
      name: 'Basic Plan',
      price: '$9.99',
      features: [
        'Up to 5 tutors',
        'Email support',
        '50 students',
        'Free cancelation',
      ],
    },
    {
      id: 'prod_JsyahLlYSfbo10',
      priceId: 'price_1JFCd1LRzwdq8WffJcJUVdNn',
      name: 'Standard Plan',
      price: '$19.99',
      features: [
        'Up to 10 tutors',
        'Email support',
        '10 students',
        'Live class-room',
      ],
    },
    {
      id: 'prod_JsyZVmF9cy9fV6',
      priceId: 'price_1JFCcPLRzwdq8WffS0bCEXq0',
      name: 'Premium Plan',
      price: '$29.99',
      features: [
        'Up to 20 tutors',
        '24/7 support',
        '200 students',
        'Secure streaming',
      ],
    },
  ]

  constructor(private http: HttpClient) {}

  getMembership(): Observable<IMemberShipPlan[]> {
    return of(this.membershipPlans);
  }

  getCheckoutPlan(id: any): Observable<IMemberShipPlan> {
    return of(this.membershipPlans[id]);
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








