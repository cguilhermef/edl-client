import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAccountComponent, ForgotPasswordComponent, LoginComponent} from './containers';
import {AuthRoutingModule} from './auth-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';
import { RecoveryPasswordComponent } from './containers/recovery-password/recovery-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivateEmailComponent } from './containers/activate-email/activate-email.component';

@NgModule({
  declarations: [CreateAccountComponent, LoginComponent, ForgotPasswordComponent, RecoveryPasswordComponent, ActivateEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
