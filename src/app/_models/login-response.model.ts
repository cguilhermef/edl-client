import { AuthenticatedUser } from './authenticated-user.model';
import {Summoner} from './summoner.model';

export interface LoginResponse {
  access_token: string;
  email_verified: boolean;
  account_verified: boolean;
  user: AuthenticatedUser;
  summoner: Summoner;
}
