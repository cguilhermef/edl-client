import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as authAction from '@app/auth/state/auth.actions';
import * as fromAuth from '@app/auth/state/auth.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private store: Store<fromAuth.State>,
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoginRequest = req.url.search('auth/login') >= 0;
    const update = {
      setHeaders: {
        Authorization: `Bearer ${ this.authService.token() }`,
        'Content-Type': 'application/json'
      }
    };

    const reqClone = isLoginRequest ? req.clone() : req.clone(update);
    return next.handle(reqClone)
      .pipe(
        map(event => event),
        catchError(err => {
          const { status } = err;
          switch ( status ) {
            case 401: {
              this.store.dispatch(new authAction.Logout());
              break;
            }
          }
          return throwError(err);
        })
      );
  }
}
