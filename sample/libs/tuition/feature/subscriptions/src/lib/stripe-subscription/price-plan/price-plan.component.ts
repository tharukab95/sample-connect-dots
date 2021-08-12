import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from '../../models/IMembership';
import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'app-price-plan',
  templateUrl: './price-plan.component.html',
  styleUrls: ['./price-plan.component.scss'],
})
export class PricePlanComponent implements OnInit {
  @Input()
  membership: IMemberShipPlan | undefined;

  @Input()
  index: number | undefined

  constructor() {}

  ngOnInit(): void {

  }
}
