import { UserRoles } from "../entities/user.entity";
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  role?: UserRoles;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
