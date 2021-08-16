import { Module } from '@nestjs/common';
import { AuthApiService } from './auth-api.service';
import { UserModule } from './user/user.module';

@Module({
  providers: [AuthApiService],
  exports: [AuthApiService],
  imports: [UserModule],
})
export class AuthApiModule {}
