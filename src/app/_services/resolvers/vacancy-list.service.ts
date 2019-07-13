import {Injectable} from '@angular/core';
import {VacanciesService} from '../vacancies.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
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
    return this.service.index(1, itensPerPage);
  }
}
