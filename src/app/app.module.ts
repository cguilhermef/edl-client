import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer as authReducer} from './auth/state/auth.reducer';
import {environment} from '@env/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AccountService, AuthInterceptorService, RiotService} from '@app/_services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      auth: authReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'EDLWeb',
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    AccountService,
    RiotService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
