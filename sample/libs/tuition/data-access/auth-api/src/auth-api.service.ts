import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from './user/entities/user.entity';
import { jwtSecret } from './constants';
import { AuthResDto } from './auth-res.dto';

@Injectable()
export class AuthApiService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validate(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    return result;
  }

  async login(user: User): Promise<AuthResDto> {
    const authUser = await this.userService.getUserByEmail(user.email);

    const payload = {
      email: authUser.email,
      userId: authUser.id,
    };

    const { password, ...result } = authUser;

    return {
      user: result,
      access_token: this.jwtService.sign(payload),
    };
  }

  async verify(token: string): Promise<any> {
    const decoded = this.jwtService.verify(token, {
      secret: jwtSecret,
    });

    const user = await this.userService.getUserByEmail(decoded.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;

    return result;
  }
}
