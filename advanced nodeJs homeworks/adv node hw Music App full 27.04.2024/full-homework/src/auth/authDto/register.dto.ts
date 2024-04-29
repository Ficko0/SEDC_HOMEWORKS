import { IsEnum } from 'class-validator';
import { LoginDto } from './login.dto';
import { Role } from 'src/common/enums/roles.enum';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO extends LoginDto {
  @IsEnum(Role)
  @ApiProperty({
    enum: Role,
    description: 'Role for the user',
    example: Role.USER,
    default: Role.USER,
  })
  role: Role = Role.USER;
}
