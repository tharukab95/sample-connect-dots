import { UserType } from '../entities/user.entity';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  role?: UserType;

  // @IsNotEmpty()
  // userName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
