import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from '@app/_models';
import {RiotService} from '@app/_services';

@Injectable({
  providedIn: 'root'
})
export class RolesListService implements Resolve<Observable<Role[]>> {

  constructor(private service: RiotService) {
  }

  resolve(): Observable<Role[]> {
    return this.service.roles();
  }
}
