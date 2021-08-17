import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from '../user/entities/user.entity';

import { UserService } from '../user/user.service';
import { jwtSecret } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret
        })
    }

    async validate(validationPayload: { email: string, sub: string }): Promise<User>{
        return await this.userService.getUserByEmail(validationPayload.email);
    }
}
