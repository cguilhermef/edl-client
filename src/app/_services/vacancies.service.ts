import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '@app/_models';
import {Observable, throwError} from 'rxjs';
import {endpoints} from '@app/shared/endpoints';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  constructor(
    private http: HttpClient
  ) {
  }

  destroy(vacancy: Vacancy): Observable<void> {
    return this.http.delete(endpoints.vacancies.byId(vacancy.id))
      .pipe(
        map(response => null),
        catchError(err => throwError(err))
      );
  }

  store(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post(endpoints.vacancies.list, vacancy)
      .pipe(
        map((response: Vacancy) => response),
        catchError(err => throwError(err))
      );
  }
}
