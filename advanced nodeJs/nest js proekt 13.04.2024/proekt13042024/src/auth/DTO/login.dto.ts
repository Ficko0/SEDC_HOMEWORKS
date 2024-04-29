import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Users' email address",
    example: 'johndoe@example.com',
  })
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({
    type: String,
    description: "Users' strong password",
    example: 'Pa$$w0rd',
  })
  password: string;
}
