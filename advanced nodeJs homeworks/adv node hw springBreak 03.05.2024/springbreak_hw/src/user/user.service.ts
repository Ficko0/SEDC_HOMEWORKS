import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserResponseDTO } from './userDto/user-response.dto';
import { RegisterDTO } from 'src/auth/authDto/register.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getFullUser(username: string): Promise<User> {
    return this.userRepo.findOneBy({ username });
  }

  async getUser(username: string): Promise<UserResponseDTO> {
    return this.userRepo.findOneBy({ username });
  }

  async create(credentials: RegisterDTO): Promise<UserResponseDTO> {
    const newUser = this.userRepo.create(credentials);

    await this.userRepo.save(newUser);

    return {
      username: newUser.username,
      role: newUser.role,
    };
  }
}
