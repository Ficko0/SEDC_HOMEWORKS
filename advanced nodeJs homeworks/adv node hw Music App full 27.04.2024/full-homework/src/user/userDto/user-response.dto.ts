import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/roles.enum';

export class UserResponseDTO {
  @ApiProperty({
    type: String,
    description: 'The username of the user',
    example: 'johndoe@example.com',
  })
  username: string;

  @ApiProperty({
    enum: Role,
    description: 'The role of the user',
    example: Role.USER,
  })
  role: Role;
}
