import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Users' email address",
    example: 'johndoe@example.com',
  })
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "Users' password",
    example: 'Pa$$w0rd',
  })
  password: string;
}
