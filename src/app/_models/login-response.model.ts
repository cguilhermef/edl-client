import { AuthenticatedUser } from './authenticated-user.model';

export interface LoginResponse {
  token: string;
  data: AuthenticatedUser;
}
