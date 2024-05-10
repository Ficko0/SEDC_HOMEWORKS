import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './authDto/register.dto';
import { UserResponseDTO } from 'src/user/userDto/user-response.dto';
import { LoginDTO } from './authDto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() body: RegisterDTO): Promise<UserResponseDTO> {
    return this.authService.register(body);
  }

  @Post('/login')
  login(@Body() body: LoginDTO): Promise<any> {
    return this.authService.login(body);
  }
}
