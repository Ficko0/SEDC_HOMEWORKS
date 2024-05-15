import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    type: String,
    description: 'Email address of the existing user',
    example: 'johndoe@example.com',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    type: String,
    description: 'Password of the existing user',
    example: 'Pa$$w0rd',
  })
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
