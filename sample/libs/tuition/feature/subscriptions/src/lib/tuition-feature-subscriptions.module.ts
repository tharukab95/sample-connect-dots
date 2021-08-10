import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StripeSubscriptionComponent } from './stripe-subscription/stripe-subscription.component';
import { StripeSubscriptionService } from './services/stripe-subscription.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: StripeSubscriptionComponent}
    ]),
  ],
  declarations: [
    StripeSubscriptionComponent
  ],
  exports: [
    StripeSubscriptionComponent
  ],
  providers: [
    StripeSubscriptionService
  ]
})
export class TuitionFeatureSubscriptionsModule {}
