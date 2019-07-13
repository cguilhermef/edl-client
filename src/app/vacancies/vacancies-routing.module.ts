import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './containers/list';
import {RolesListService, VacancyListService} from '@app/_services';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
    resolve: {
      items: VacancyListService,
      roles: RolesListService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacanciesRoutingModule {
}
