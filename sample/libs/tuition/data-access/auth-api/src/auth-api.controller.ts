import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthApiService } from './auth-api.service';
import { User } from './user/entities/user.entity';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthApiController {
  constructor(private readonly authApiService: AuthApiService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request): { access_token: string } {
    return this.authApiService.login(req.body as User);
  }
}
