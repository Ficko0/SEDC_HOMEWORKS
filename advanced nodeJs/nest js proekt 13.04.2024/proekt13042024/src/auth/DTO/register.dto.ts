import { IsEnum } from 'class-validator';
import { Role } from '../../common/enums/role.enum';
import { LoginDTO } from './login.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto extends LoginDTO {
  @IsEnum(Role)
  @ApiProperty({
    enum: Role,
    description: "Users' role",
    example: Role.USER,
    default: Role.USER,
  })
  role: Role = Role.USER;
}
