import {Injectable} from '@angular/core';
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
  ) {
  }

  index(page: number = 1, size: number = 6, owner: number = null): Observable<ListResponse<Team[]>> {
    return this.http.get(endpoints.teams.list, {
      params: {
        page: String(page),
        size: String(size),
        owner: owner ? String(owner) : null
      }
    }).pipe(
      map((response: ListResponse<Team[]>) => response),
      catchError(err => throwError(err))
    );
  }

  show(teamId: number): Observable<Team> {
    return this.http.get(endpoints.teams.byId(teamId))
      .pipe(
        map((response: Team) => response),
        catchError(err => throwError(err))
      );
  }

  store(team: Team): Observable<Team> {
    if (team.id) {
      return this.update(team);
    }
    return this.http.post(endpoints.teams.list, team)
      .pipe(
        map((response: Team) => team),
        catchError(err => throwError(err))
      );
  }

  update(team: Team): Observable<Team> {
    return this.http.put(endpoints.teams.byId(team.id), team)
      .pipe(
        map((response: Team) => team),
        catchError(err => throwError(err))
      );
  }
}
