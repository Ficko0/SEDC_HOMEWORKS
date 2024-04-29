import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserResponseDTO } from './userDto/user-response.dto';
import { RegisterDTO } from './../auth/authDto/register.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getFullUser_DANGER(username: string): Promise<User> {
    return this.userRepo.findOneBy({
      username,
    });
  }

  async getUserByUsername(username: string): Promise<UserResponseDTO> {
    return this.userRepo.findOneBy({
      username,
    });
  }

  async createUser(credentials: RegisterDTO): Promise<UserResponseDTO> {
    const newUser = this.userRepo.create(credentials);

    await this.userRepo.save(newUser);

    return {
      username: newUser.username,
      role: newUser.role,
    };
  }
}
