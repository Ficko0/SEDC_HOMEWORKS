import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './authDto/register.dto';
import { UserResponseDTO } from 'src/user/userDto/user-response.dto';
import { LoginDto } from './authDto/login.dto';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidUnknownValues: true,
  }),
)
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Regster a new user' })
  @ApiCreatedResponse({
    type: UserResponseDTO,
    description: 'User registered succesfully',
  })
  @Post('/register')
  register(@Body() body: RegisterDTO): Promise<UserResponseDTO> {
    return this.authService.register(body);
  }

  @ApiOperation({ summary: 'Login an existing user' })
  @ApiResponse({ status: 200, description: 'User logged-in succesfully' })
  @Post('/login')
  login(@Body() body: LoginDto): Promise<any> {
    return this.authService.login(body);
  }
}
