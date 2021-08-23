import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-pricing-plan',
  template: `
    <div class="card">
      <div class="card__head">
        <div class="card__title">{{ plan.name }}</div>
      </div>
      <div class="card__price">
        <span class="card__amount">
          <span>{{ plan.currency }} {{ plan.amount }}</span>
        </span>
      </div>
      <div class="card__body">
        <ul class="card__list">
          <li class="card__item" *ngFor="let feature of plan.features">
            {{ feature }}
          </li>
        </ul>
        <a href="{{ plan.href }}" title="" class="card__btn">Select</a>
      </div>
    </div>
  `,
  styleUrls: ['./pricing-plan-card.component.scss'],
})
export class PricingPlanCardComponent {
  @Input()
  plan: any = {};

  constructor() {
    console.log(this.plan);
  }
}
