import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PricingPlan } from '../../models/Pricing';

import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'tuition-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss'],
})
export class PricingPlansComponent implements OnInit {
  $plans: Observable<PricingPlan[]> | undefined;

  constructor(private stripeSubscriptionService: StripeSubscriptionService) {}

  ngOnInit(): void {
    // this.$plans = this.stripeSubscriptionService.getMembership();
  }
}
