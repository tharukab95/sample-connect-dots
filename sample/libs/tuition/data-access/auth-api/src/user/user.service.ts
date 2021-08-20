import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email: email });
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    // const pass = createUserDto.password;
    // const hash = await bcrypt.hash(pass, saltOrRounds);
    // createUserDto.password = hash;

    const user = await this.userRepository.save(createUserDto);
    const { password, ...result } = user;

    return result;
  }
}
