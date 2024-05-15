import { Role } from 'src/common/enums/role.enum';
import { LoginDTO } from './login.dto';
import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO extends LoginDTO {
  @ApiProperty({
    enum: Role,
    default: Role.USER,
    description: 'The role of the new user',
    example: Role.USER,
  })
  @IsEnum(Role)
  role: Role = Role.USER;
}
