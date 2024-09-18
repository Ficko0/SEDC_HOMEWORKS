import { UserRole } from './user-role.enum';

export interface AuthResponse {
  email: string;
  role: UserRole;
  token: string;
  refreshToken: string;
}
