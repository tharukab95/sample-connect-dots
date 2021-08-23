import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-pricing-plan',
  template: `
    <div class="grid">
      <div class="col" *ngFor="let plan of plans">
        <card-pricing-plan [plan]="plan"></card-pricing-plan>
      </div>
    </div>
  `,
  styleUrls: ['./pricing-plan-grid.component.scss'],
})
export class PricingPlanGridComponent implements OnInit {
  @Input()
  plans: any[] = [];

  constructor() {
    console.log(this.plans);
  }

  ngOnInit(): void {
    console.log(this.plans);
  }
}
