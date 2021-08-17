import { User } from "./user/entities/user.entity";

export class AuthResDto {
  user: Partial<User>;
  access_token: string;
}
