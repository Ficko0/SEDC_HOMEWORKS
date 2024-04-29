import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RegisterDto } from './DTO/register.dto';
import { LoginDTO } from './DTO/login.dto';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.entity';
import { UserResponeDTO } from 'src/user/DTO/user-response.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({
    description: 'User succesfully registered',
    type: User,
  })
  @ApiBody({ type: RegisterDto })
  register(@Body() body: RegisterDto): Promise<UserResponeDTO> {
    return this.authService.register(body);
  }

  @Post('/')
  @ApiOperation({ summary: 'Login an existing user' })
  @ApiResponse({ status: 200, description: 'User has succesfully logged in' })
  @ApiBody({ type: LoginDTO })
  login(@Body() body: LoginDTO) {
    return this.authService.login(body);
  }
}
