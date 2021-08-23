import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMemberShipPlan } from '../models/IMembership';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  // membershipPlans = [
  //   {
  //     id: 'prod_JsyaUS7P4g02WW',
  //     priceId: 'price_1JFCdJLRzwdq8WffXaOWsnE0',
  //     name: 'Basic Plan',
  //     price: '$9.99',
  //     features: [
  //       'Up to 5 tutors',
  //       'Email support',
  //       '50 students',
  //       'Free cancellation',
  //     ],
  //   },
  //   {
  //     id: 'prod_JsyahLlYSfbo10',
  //     priceId: 'price_1JFCd1LRzwdq8WffJcJUVdNn',
  //     name: 'Standard Plan',
  //     price: '$19.99',
  //     features: [
  //       'Up to 10 tutors',
  //       'Email support',
  //       '10 students',
  //       'Live class-room',
  //     ],
  //   },
  //   {
  //     id: 'prod_JsyZVmF9cy9fV6',
  //     priceId: 'price_1JFCcPLRzwdq8WffS0bCEXq0',
  //     name: 'Premium Plan',
  //     price: '$29.99',
  //     features: [
  //       'Up to 20 tutors',
  //       '24/7 support',
  //       '200 students',
  //       'Secure streaming',
  //     ],
  //   },
  // ];
  baseUrl: string = 'http://localhost:3000/';
  subscriptionPlans: IMemberShipPlan[] = [];

  constructor(private http: HttpClient) {}

  getSubscription(id: any): Observable<Subscription> {
    return of(this.subscriptionPlans[id]);
  }

  findAllSubscriptionPlans(): Observable<IMemberShipPlan[]> {
    return of(this.subscriptionPlans);
  }
}
