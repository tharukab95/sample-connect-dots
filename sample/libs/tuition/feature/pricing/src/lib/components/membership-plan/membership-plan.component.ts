import { Component, Input, OnInit } from '@angular/core';
import { PricingPlan } from '../../models/Pricing';

@Component({
  selector: 'tuition-membership-plan',
  templateUrl: './membership-plan.component.html',
  styleUrls: ['./membership-plan.component.scss'],
})
export class MembershipPlanComponent implements OnInit {
  @Input()
  membership: PricingPlan | undefined;

  @Input()
  index: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
