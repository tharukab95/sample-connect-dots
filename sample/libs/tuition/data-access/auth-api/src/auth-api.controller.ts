import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { AuthApiService } from './auth-api.service';
import { User } from './user/entities/user.entity';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthResDto } from './auth-res.dto';
@Controller('auth')


export class AuthApiController {
  constructor(private readonly authApiService: AuthApiService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<AuthResDto> {
    return this.authApiService.login(req.body as User);
  }
}
