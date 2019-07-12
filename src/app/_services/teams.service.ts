import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ListResponse, Team} from '@app/_models';
import {endpoints} from '@app/shared/endpoints';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient
  ) { }

  index(page: number = 1, size: number = 6): Observable<ListResponse<Team[]>> {
    return this.http.get(endpoints.teams.list, {
      params: {
        page: String(page),
        size: String(size)
      }
    }).pipe(
      map( (response: ListResponse<Team[]>) => response),
      catchError( err => throwError(err))
    );
  }
}
