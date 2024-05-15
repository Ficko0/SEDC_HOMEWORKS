import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/common/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    type: String,
    description: 'The email of the user',
    example: 'johndoe@example.com',
  })
  @Column({
    type: String,
  })
  username: string;

  @ApiProperty({
    type: String,
    description: 'The password of the user',
    example: 'Pa$$w0rd',
  })
  @Column({
    type: String,
  })
  password: string;

  @ApiProperty({
    enum: Role,
    default: Role.USER,
    description: 'The role of the user',
    example: Role.USER,
  })
  @Column({
    enum: Role,
    enumName: 'role',
    default: Role.USER,
  })
  role: Role;
}
