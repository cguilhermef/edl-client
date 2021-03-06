import {NgModule} from '@angular/core';
import {RankingsListService} from './rankings-list.service';
import {TeamsListService} from './teams-list.service';
import {TeamService} from './team.service';
import {RolesListService} from './roles-list.service';
import {VacancyListService} from './vacancy-list.service';

@NgModule({
  providers: [
    RankingsListService,
    RolesListService,
    TeamService,
    TeamsListService,
    VacancyListService
  ]
})
export class ResolversModule {
}
