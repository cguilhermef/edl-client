import { AuthenticatedUser } from './authenticated-user.model';
import {Summoner} from './summoner.model';
import {UserRanking} from '@app/_models/user-ranking.model';

export interface LoginResponse {
  access_token: string;
  email_verified: boolean;
  account_verified: boolean;
  user: AuthenticatedUser;
  rankings: UserRanking[];
  summoner: Summoner;
}
