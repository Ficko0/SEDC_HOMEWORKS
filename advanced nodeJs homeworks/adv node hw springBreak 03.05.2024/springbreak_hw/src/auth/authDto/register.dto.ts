import { Role } from 'src/common/enums/role.enum';
import { LoginDTO } from './login.dto';
import { IsEnum } from 'class-validator';

export class RegisterDTO extends LoginDTO {
  @IsEnum(Role)
  role: Role = Role.USER;
}
