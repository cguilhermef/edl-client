import { Injectable } from '@angular/core';
import {AuthService} from '../auth.service';
import {TeamsService} from '../teams.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ListResponse, Team} from '@app/_models';
import {itensPerPage} from '@app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService implements Resolve<Observable<ListResponse<Team[]>>>{

  constructor(
    private authService: AuthService,
    private service: TeamsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ListResponse<Team[]>> {
    // tslint:disable-next-line:variable-name
    const my_teams = route.queryParamMap.get('my_teams');
    return my_teams
      ? this.service.index(1, itensPerPage, this.authService.getUserCached().user.id)
      : this.service.index(1, itensPerPage);
  }
}
