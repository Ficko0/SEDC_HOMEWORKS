import { Role } from 'src/common/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  username: string;

  @Column({
    type: String,
  })
  password: string;

  @Column({
    enum: Role,
    enumName: 'role',
    default: Role.USER,
  })
  role: Role;
}
