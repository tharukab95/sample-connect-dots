import { Controller, Post, Body } from '@nestjs/common';
import { AuthApiService } from './auth-api.service';
import { LoginDto } from './auth-api.interface';
import { User } from './user/entities/user.entity';

@Controller('login')
export class AuthApiController {
  constructor(private readonly authApiService: AuthApiService) {}

  @Post()
  async login(@Body() loginDto: LoginDto): Promise<User> {
    return this.authApiService.login(loginDto);
  }
}
