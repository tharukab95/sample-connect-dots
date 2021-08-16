import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './auth-api.interface';
import { User } from './user/entities/user.entity';

@Injectable()
export class AuthApiService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  login(loginDto: LoginDto): Promise<User> {
    return this.userRepository.findOne({ email: loginDto.email });
  }
}
