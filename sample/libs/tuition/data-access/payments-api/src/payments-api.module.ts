import { Module } from '@nestjs/common';
import { PaymentsApiService } from './payments-api.service';

@Module({
  providers: [PaymentsApiService],
  exports: [PaymentsApiService],
})
export class PaymentsApiModule {}
