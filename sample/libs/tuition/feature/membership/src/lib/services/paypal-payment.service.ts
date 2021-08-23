import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PricingPlan } from '../models/Pricing';

@Injectable({
  providedIn: 'root',
})
export class PaypalPaymentService {
  baseUrl: string = 'http://localhost:3000/';

  async createOrder() {
    const res = await fetch(
      this.baseUrl + '/api/transactions/create-paypal-transaction',
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return data.id;
  }
}
