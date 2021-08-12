import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StripeSubscriptionService } from './services/stripe-subscription.service';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubscriptionCheckoutComponent } from './stripe-subscription/subscription-checkout/subscription-checkout.component';
import { MembershipFailureComponent } from './stripe-subscription/membership-failure/membership-failure.component';
import { PricePlanComponent } from './stripe-subscription/price-plan/price-plan.component';
import { MembershipSuccessComponent } from './stripe-subscription/membership-success/membership-success.component';

const routes: Routes = [
  { path: '', component: SubscriptionPlansComponent },
  { path: 'checkout/:id', component: SubscriptionCheckoutComponent, pathMatch: 'full'},
  { path: 'success', component: MembershipSuccessComponent },
  { path: 'failure', component: MembershipFailureComponent },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SubscriptionPlansComponent,
    SubscriptionCheckoutComponent,
    PricePlanComponent,
    MembershipFailureComponent,
    MembershipSuccessComponent,
  ],
  exports: [
    SubscriptionPlansComponent,
    SubscriptionCheckoutComponent,
    PricePlanComponent,
    MembershipFailureComponent,
    MembershipSuccessComponent,
  ],
  providers: [
    StripeSubscriptionService
  ]
})
export class TuitionFeatureSubscriptionsModule {}
