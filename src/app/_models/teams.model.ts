import {Ranking} from './ranking.model';
import {Vacancy} from './vacancy.model';

export class Team {
  id: number;
  name: string;
  abbreviation: string;
  minRanking: number;
  owner: number;
  // tslint:disable-next-line:variable-name
  initial_ranking: Ranking;
  vacancies: Vacancy[];
}
