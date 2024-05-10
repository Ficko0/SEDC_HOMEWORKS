import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './authDto/register.dto';
import { UserResponseDTO } from 'src/user/userDto/user-response.dto';
import { LoginDTO } from './authDto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const validUser = await this.userService.getFullUser(username);

    if (!validUser) {
      return null;
    }

    const matched = await bcrypt.compare(password, validUser.password);

    if (!matched) {
      return null;
    }

    return validUser;
  }

  async register({
    username,
    password,
    role,
  }: RegisterDTO): Promise<UserResponseDTO> {
    const existingUser = await this.userService.getUser(username);

    if (existingUser) {
      throw new BadRequestException(
        `User with username ${username} already exists.`,
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPass,
      role,
    };

    return this.userService.create(newUser);
  }

  async login({ username, password }: LoginDTO): Promise<any> {
    const validUser = await this.validateUser(username, password);

    if (!validUser) {
      throw new BadRequestException(`Invalid Credentials!`);
    }

    const tokenPayload = {
      username: validUser.username,
      role: validUser.role,
      sub: validUser.id,
    };

    const token = this.jwtService.sign(tokenPayload);

    const { password: __, ...restOfUser } = validUser;

    return {
      User: restOfUser,
      Token: token,
    };
  }
}
