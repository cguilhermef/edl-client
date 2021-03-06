import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CreateAccount, CreateAccountResponse, RegisterSummonerResponse, Summoner} from '@app/_models';
import {Observable, of, throwError} from 'rxjs';
import {endpoints} from '@app/shared/endpoints';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) {
  }

  create(account: CreateAccount): Observable<any> {
    const {name, email, password} = account;
    return this.http.post(
      endpoints.auth.register,
      {name, email, password}
    ).pipe(
      map((response: CreateAccountResponse) => response),
      catchError((response: HttpErrorResponse) => {
        const {errors} = response.error;
        return throwError(errors[0].detail);
      })
    );
  }

  confirmEmail(token: string): Observable<string> {
    return this.http.get(`${endpoints.auth.activate}/${token}`)
      .pipe(
        map((response: string) => response),
        catchError(error => throwError(error))
      );
  }

  registerSummoner(summoner: string): Observable<RegisterSummonerResponse> {
    return this.http.post(
      endpoints.summoner.register,
      {summoner}
    ).pipe(
      map((response: RegisterSummonerResponse) => response),
      catchError(err => throwError(err))
    );
  }

  verifySummoner(summoner: string, iconId: number): Observable<Summoner> {
    return this.http.post(
      endpoints.summoner.confirm,
      {summoner, iconId}
    ).pipe(
      map((response: Summoner) => response),
      catchError(err => throwError(err))
    );
  }

}
