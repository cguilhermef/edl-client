import {Ranking} from './ranking.model';

export class Team {
  id: number;
  name: string;
  abbreviation: string;
  minRanking: number;
  owner: number;
  initialRanking: Ranking;
}
