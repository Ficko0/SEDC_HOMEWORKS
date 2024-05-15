import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './authDto/register.dto';
import { UserResponseDTO } from 'src/user/userDto/user-response.dto';
import { LoginDTO } from './authDto/login.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ description: 'Succesfully registered' })
  @Post('/register')
  register(@Body() body: RegisterDTO): Promise<UserResponseDTO> {
    return this.authService.register(body);
  }

  @ApiOperation({ summary: 'Log-in an existing user' })
  @ApiCreatedResponse({ description: 'Succesfully logged in' })
  @Post('/login')
  login(@Body() body: LoginDTO): Promise<any> {
    return this.authService.login(body);
  }
}
