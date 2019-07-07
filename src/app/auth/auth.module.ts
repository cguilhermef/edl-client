import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAccountComponent, ForgotPasswordComponent, LoginComponent} from './containers';
import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import { RecoveryPasswordComponent } from './containers/recovery-password/recovery-password.component';

@NgModule({
  declarations: [CreateAccountComponent, LoginComponent, ForgotPasswordComponent, RecoveryPasswordComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
