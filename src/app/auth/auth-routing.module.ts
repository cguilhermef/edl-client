import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ActivateEmailComponent,
  CreateAccountComponent,
  ForgotPasswordComponent, LinkAccountComponent,
  LoginComponent,
  RecoveryPasswordComponent
} from '@app/auth/containers';
import {AuthenticatedGuard, NonAuthenticatedGuard} from '@app/_guards';

const routes: Routes = [
  {
    path: 'activate',
    component: ActivateEmailComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'link-account',
    component: LinkAccountComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'register',
    component: CreateAccountComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NonAuthenticatedGuard]
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent,
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
