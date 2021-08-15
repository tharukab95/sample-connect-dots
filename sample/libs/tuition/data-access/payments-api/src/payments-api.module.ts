import { Module } from '@nestjs/common';
import { PaymentsApiService } from './payments-api.service';
import { StripeModule } from './stripe/stripe.module';
import { CybersourceModule } from './cybersource/cybersource.module';
import { PaypalModule } from './paypal/paypal.module';

@Module({
  providers: [PaymentsApiService],
  exports: [PaymentsApiService],
  imports: [StripeModule, CybersourceModule, PaypalModule],
})
export class PaymentsApiModule {}
