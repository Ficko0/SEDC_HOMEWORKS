import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
