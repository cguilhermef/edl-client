import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateAccountComponent, LoginComponent} from './containers';
import {AuthRoutingModule} from './auth-routing.module';
import {MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [CreateAccountComponent, LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
