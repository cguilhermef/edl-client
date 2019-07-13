import { Injectable } from '@angular/core';
import {TeamsService} from '../teams.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Team} from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements Resolve<Observable<Team>> {

  constructor(
    private service: TeamsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    const teamId  = +route.paramMap.get('teamId');
    return this.service.show(teamId);
  }
}
