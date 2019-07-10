import { AuthenticatedUser } from './authenticated-user.model';

export interface LoginResponse {
  access_token: string;
  email_verified: boolean;
  account_verified: boolean;
  user: AuthenticatedUser;
}
