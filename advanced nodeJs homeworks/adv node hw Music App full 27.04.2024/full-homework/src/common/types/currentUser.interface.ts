import { Role } from './../enums/roles.enum';

export interface ICurrentUser {
  userId: string;
  role: Role;
  username: string;
}
