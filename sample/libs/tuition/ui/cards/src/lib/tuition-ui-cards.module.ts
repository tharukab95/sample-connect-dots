import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPlanCardComponent } from './components/pricing-plan/pricing-plan-card.component';
import { CourseCard } from './components/course/course.card';
import { LoginCard } from './components/login/login.card';
import { ProfileCard } from './components/profile/profile.card';
import { CheckoutCard } from './components/checkout/checkout.card';
import { PricingPlanGridComponent } from './components/pricing-plan/pricing-plan-grid.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    PricingPlanCardComponent,
    PricingPlanGridComponent,
    CourseCard,
    LoginCard,
    ProfileCard,
    CheckoutCard,
  ],
  exports: [
    PricingPlanCardComponent,
    PricingPlanGridComponent,
    CourseCard,
    LoginCard,
    ProfileCard,
    CheckoutCard,
  ],
})
export class TuitionUiCardsModule {}
