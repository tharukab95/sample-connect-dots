import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './paypal/paypal.component';
import { StripeComponent } from './stripe/stripe.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [PaypalComponent, StripeComponent],
  exports: [PaypalComponent, StripeComponent],
})
export class TuitionUiPayButtonsModule {}
