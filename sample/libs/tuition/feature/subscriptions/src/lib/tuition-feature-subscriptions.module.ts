import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricingPlansComponent } from './pricing-plans/pricing-plans.component';
import { TuitionUiCardsModule } from '@tuition/ui-cards';
@NgModule({
  imports: [
    CommonModule,
    TuitionUiCardsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PricingPlansComponent },
    ]),
  ],
  declarations: [PricingPlansComponent],
})
export class TuitionFeatureSubscriptionsModule {}
