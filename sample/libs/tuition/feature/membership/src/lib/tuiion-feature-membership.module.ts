import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StripeSubscriptionService } from './services/stripe-subscription.service';
import { PricingPlansComponent } from './components/pricing-plans/pricing-plans.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MembershipCheckoutComponent } from './components/membership-checkout/membership-checkout.component';
import { MembershipFailureComponent } from './components/membership-failure/membership-failure.component';
import { MembershipPlanComponent } from './components/membership-plan/membership-plan.component';
import { MembershipSuccessComponent } from './components/membership-success/membership-success.component';
import { MembershipEffects } from './+state//membership.effects';
import { membershipReducer } from './+state/membership.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PaypalPaymentService } from './services/paypal-payment.service';
import { PricingPlansService } from './services/pricing-plans.service';

const routes: Routes = [
  { path: '', component: PricingPlansComponent },
  {
    path: 'checkout/:id',
    component: MembershipCheckoutComponent,
    pathMatch: 'full',
  },
  { path: 'success', component: MembershipSuccessComponent },
  { path: 'failure', component: MembershipFailureComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([MembershipEffects]),
    StoreModule.forFeature('pricing', membershipReducer),
  ],
  declarations: [
    MembershipCheckoutComponent,
    MembershipFailureComponent,
    MembershipSuccessComponent,
    MembershipPlanComponent,
    PricingPlansComponent,
  ],
  providers: [
    StripeSubscriptionService,
    PaypalPaymentService,
    PricingPlansService,
  ],
})
export class TuiionFeatureMembershipModule {}
