import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from '../models/IMembership';
import { StripeSubscriptionService } from '../services/stripe-subscription.service';

@Component({
  selector: 'sample-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent implements OnInit {
  $plans: Observable<IMemberShipPlan[]> | undefined;

  constructor(private stripeSubscriptionService: StripeSubscriptionService) { }

  ngOnInit(): void {
    this.$plans = this.stripeSubscriptionService.getMembership();
  }

}
