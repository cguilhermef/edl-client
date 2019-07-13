import {Team} from '@app/_models/teams.model';

export class Vacancy {
  id: number;
  teamId: number;
  roleId: number;
  team: {
    id: number,
    name: string,
    owner: {
      id: number,
      summoner: {
        id: number,
        name: string,
        rank: string
      }
    },
    initial_ranking: {
      id: number,
      name: number
    }
  };
}
