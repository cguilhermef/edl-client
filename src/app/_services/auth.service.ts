import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, Subject, throwError} from 'rxjs';
import { AuthenticatedUser, LoginResponse } from '../_models';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from '../shared/endpoints';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: Subject<boolean> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(identity: string, password: string): Observable<LoginResponse> {
    return this.http.post(endpoints.auth.login, {
      email: identity,
      password
    })
      .pipe(
        map((response: LoginResponse) => {
          const { user: user, access_token } = response;
          this.setUserCache(response);
          this.isLogged.next(true);
          return response;
        }),
        catchError((response: HttpErrorResponse) => {
          const { errors } = response.error;
          return throwError(errors[ 0 ].detail);
        })
      );
  }

  forgot(identity: string): Observable<void> {
    return this.http.post(endpoints.auth.forgot, {
      data: {
        type: 'forgot',
        attributes: {
          email: identity
        }
      }
    }).pipe(
      map(response => {
        return;
      }),
      catchError((response: HttpErrorResponse) => {
        const { errors } = response.error;
        return throwError(errors[ 0 ].detail);
      })
    );
  }

  /**
   * TODO - dinamizar o languageId
   */
  redefine(password: string, token: string): Observable<void> {
    return this.http.post(endpoints.auth.redefine, {
      data: {
        password,
        token,
        password_confirmation: password,
        languageId: '1',
      }
    }).pipe(
      map(() => null),
      catchError((response: HttpErrorResponse) => {
        const { errors } = response.error;
        return throwError(errors[ 0 ].detail);
      })
    );
  }

  logout() {
    this.isLogged.next(false);
    this.setUserCache(null);
    this.router.navigate(['/vacancies']);
  }
  isAuthenticated(): boolean {
    return this.getUserCached() !== null;
  }

  getUserCached(): LoginResponse {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || null;
  }

  setUserCache(loginResponse: LoginResponse) {
    if ( loginResponse === null || !loginResponse.access_token ) {
      localStorage.removeItem('user');
      return;
    }
    localStorage.setItem('user', JSON.stringify(loginResponse));
  }

  token(): string {
    const user = this.getUserCached();
    return user ? user.access_token : null;
  }

}
