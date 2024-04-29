import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { RegisterDTO } from './authDto/register.dto';
import { UserResponseDTO } from '../user/userDto/user-response.dto';
import { LoginDto } from './authDto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register({
    username,
    password,
    role,
  }: RegisterDTO): Promise<UserResponseDTO> {
    const existingUser = await this.userService.getUserByUsername(username);

    if (existingUser) {
      throw new BadRequestException(
        `The user with the username ${username} already exists`,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      password: hashedPassword,
      role,
    };

    return this.userService.createUser(user);
  }

  async validateUser(username: string, password: string) {
    const existingUser = await this.userService.getFullUser_DANGER(username);

    if (!existingUser) {
      return null;
    }

    const matched = await bcrypt.compare(password, existingUser.password);

    if (!matched) {
      return null;
    }

    return existingUser;
  }

  async login({ username, password }: LoginDto): Promise<any> {
    const validUser = await this.validateUser(username, password);

    if (!validUser) {
      throw new BadRequestException(`Invalid Credentials`);
    }

    const payload = {
      username: validUser.username,
      role: validUser.role,
      sub: validUser.id,
    };

    const accessToken = this.jwtService.sign(payload);

    const { password: notNeeded, ...restOfUser } = validUser;

    return {
      user: restOfUser,
      accessToken,
    };
  }
}
