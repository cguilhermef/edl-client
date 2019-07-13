import {Ranking} from './ranking.model';

export class Team {
  id: number;
  name: string;
  abbreviation: string;
  minRanking: number;
  owner: number;
  // tslint:disable-next-line:variable-name
  initial_ranking: Ranking;
}
