import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../common/enums/role.enum';

export class UserResponeDTO {
  @ApiProperty({
    type: String,
    description: 'The username of the user',
  })
  username: string;

  @ApiProperty({
    enum: Role,
    description: 'The role of the user',
  })
  role: Role;
}
