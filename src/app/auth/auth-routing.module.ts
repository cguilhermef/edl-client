import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent, LoginComponent} from '@app/auth/containers';
import {NonAuthenticatedGuard} from '@app/_guards';

const routes: Routes = [
  {
    path: 'register',
    component: CreateAccountComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
