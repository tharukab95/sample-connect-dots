import { Module } from '@nestjs/common';
import { AuthApiController } from './auth-api.controller';
import { LoginDto } from './auth-api.interface';
import { AuthApiService } from './auth-api.service';
import { UserModule } from './user/user.module';

@Module({
  providers: [AuthApiService],
  exports: [AuthApiService],
  imports: [UserModule],
  controllers: [AuthApiController],
})
export class AuthApiModule {}
