import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from '../../models/IMembership';
import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: ['./price-plan.component.scss'],
})
export class PricePlanComponent implements OnInit {
  $membership: Observable<IMemberShipPlan> | undefined;
  constructor(private stripeSubscriptionService: StripeSubscriptionService) {}

  ngOnInit(): void {
    this.$membership = this.stripeSubscriptionService.getMembership();
  }
}
