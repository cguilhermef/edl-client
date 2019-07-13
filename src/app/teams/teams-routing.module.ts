import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent, ListComponent, VacanciesComponent} from '@app/teams/containers';
import {AuthenticatedGuard} from '@app/_guards';
import {RankingsListService, RolesListService, TeamService, TeamsListService} from '@app/_services';

const routes: Routes = [
  {
    path: 'new',
    component: FormComponent,
    canActivate: [AuthenticatedGuard],
    resolve: {
      rankings: RankingsListService
    }
  },
  {
    path: ':teamId/edit',
    pathMatch: 'full',
    component: FormComponent,
    resolve: {
      item: TeamService,
      rankings: RankingsListService,
      roles: RolesListService
    }
  },
  {
    path: ':teamId/vacancies',
    pathMatch: 'full',
    component: VacanciesComponent,
    resolve: {
      item: TeamService,
      roles: RolesListService
    }
  },
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
    resolve: {
      items: TeamsListService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
