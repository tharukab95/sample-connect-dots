import { UserRoles } from "../entities/user.entity";

export class CreateUserDto {
  role: UserRoles;
  email: string;
  password: string;
}
