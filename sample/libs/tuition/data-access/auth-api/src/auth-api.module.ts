import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthApiService } from './auth-api.service';
import { AuthApiController } from './auth-api.controller';
import { UserModule } from './user/user.module';
import { jwtSecret } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthApiController],
  exports: [AuthApiService, PassportModule],
  providers: [AuthApiService, JwtStrategy, LocalStrategy],
})
export class AuthApiModule {}
