import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CreateAccount, CreateAccountResponse} from '@app/_models';
import {Observable, throwError} from 'rxjs';
import {endpoints} from '@app/shared';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  create(account: CreateAccount): Observable<any> {
    const { name, email, password } = account;
    return this.http.post(
      endpoints.auth.register,
      { name, email, password }
    ).pipe(
      map( (response: CreateAccountResponse) => response),
      catchError((response: HttpErrorResponse) => {
        const { errors } = response.error;
        return throwError(errors[ 0 ].detail);
      })
    );
  }
}
