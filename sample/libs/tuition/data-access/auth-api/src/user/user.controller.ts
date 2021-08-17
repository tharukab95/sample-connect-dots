import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
    return this.userService.create(createUserDto);
  }
}
