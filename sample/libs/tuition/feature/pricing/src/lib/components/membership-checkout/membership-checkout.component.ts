import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PricingPlan } from '../../models/Pricing';
import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'tuition-membership-checkout',
  templateUrl: './membership-checkout.component.html',
})
export class MembershipCheckoutComponent implements OnInit {
  $pricingPlan: Observable<PricingPlan> | undefined;
  constructor(
    private stripeSubscriptionService: StripeSubscriptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.$pricingPlan = this.stripeSubscriptionService.getCheckoutPlan(id);
  }

  onSubmit(f: NgForm) {
    Number.parseInt;
    this.stripeSubscriptionService.requestMemberSession(f.value.priceId);
  }
}
