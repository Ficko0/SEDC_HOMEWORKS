import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'ID of the user',
  })
  id: string;

  @Column()
  @ApiProperty({
    type: String,
    description: 'The username of the user',
  })
  username: string;

  @Column()
  @ApiProperty({
    type: String,
    description: 'The password of the user',
  })
  password: string;

  @Column({
    enum: Role,
    enumName: 'role',
    default: Role.USER,
  })
  @ApiProperty({
    enum: Role,
    description: 'Role of the user',
  })
  role: Role;
}
