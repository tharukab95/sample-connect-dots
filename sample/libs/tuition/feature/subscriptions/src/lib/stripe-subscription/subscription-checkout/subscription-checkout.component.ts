import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from '../../models/IMembership';
import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'app-subscription-checkout',
  templateUrl: './subscription-checkout.component.html',
})
export class SubscriptionCheckoutComponent implements OnInit {
  $membership: Observable<IMemberShipPlan> | undefined;
  constructor(private stripeSubscriptionService: StripeSubscriptionService) {}

  ngOnInit(): void {
    this.$membership = this.stripeSubscriptionService.getMembership();
  }

  onSubmit(f: NgForm) {
    this.stripeSubscriptionService.requestMemberSession(f.value.priceId);
  }
}
