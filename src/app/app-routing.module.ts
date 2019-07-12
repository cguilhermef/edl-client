import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'account',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule'
  },
  {
    path: 'vacancies',
    loadChildren: './vacancies/vacancies.module#VacanciesModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vacancies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
