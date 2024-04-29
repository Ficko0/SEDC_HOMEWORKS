import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/roles.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    description: "Users' email address",
    example: 'johndoe@example.com',
  })
  username: string;

  @Column({
    type: String,
  })
  @ApiProperty({
    type: String,
    description: "Users' password",
  })
  password: string;

  @Column({
    enum: Role,
    enumName: 'role',
    default: Role.USER,
  })
  @ApiProperty({
    enum: Role,
    description: 'The role of the user',
  })
  role: Role;
}
