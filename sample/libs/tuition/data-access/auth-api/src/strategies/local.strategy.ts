import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { User } from "../user/entities/user.entity";
import { AuthApiService } from "../auth-api.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authApiService: AuthApiService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<Partial<User>> {
    const user = await this.authApiService.validate(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
