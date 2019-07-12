import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Ranking} from '@app/_models';
import {endpoints} from '@app/shared';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  constructor(private http: HttpClient) {
  }

  index(): Observable<Ranking[]> {
    return this.http.get(endpoints.rankings.list)
      .pipe(
        map((response: Ranking[]) => response),
        catchError(err => throwError(err))
      );
  }
}
