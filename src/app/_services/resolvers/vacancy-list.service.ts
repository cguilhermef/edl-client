import {Injectable} from '@angular/core';
import {VacanciesService} from '../vacancies.service';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse, Vacancy} from '@app/_models';
import {itensPerPage} from '@app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class VacancyListService implements Resolve<Observable<ListResponse<Vacancy[]>>> {

  constructor(
    private service: VacanciesService
  ) {
  }

  resolve(): Observable<ListResponse<Vacancy[]>> {
    return of({
      data: [],
      current_page: 1,
      from: 0,
      to: 0,
      total: 0,
      per_page: 5,
    });
    // return this.service.index(1, itensPerPage);
  }
}
