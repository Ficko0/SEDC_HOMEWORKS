import { Injectable } from '@nestjs/common';
import { RegisterDto } from './DTO/register.dto';
import { LoginDTO } from './DTO/login.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { UserResponeDTO } from 'src/user/DTO/user-response.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register({ username, password, role }: RegisterDto): Promise<UserResponeDTO> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      password: hashedPassword,
      role,
    };

    return this.userService.createUser(user);
  }

  login({ username, password }: LoginDTO) {}
}
