import { RegisterDto } from './../auth/DTO/register.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserResponeDTO } from './DTO/user-response.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async createUser(credentials: RegisterDto): Promise<UserResponeDTO> {
    const user = this.userRepo.create(credentials);

    await this.userRepo.save(user);

    return {
      username: user.username,
      role,
    };
  }
}
