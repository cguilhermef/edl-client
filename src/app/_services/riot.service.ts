import {Injectable} from '@angular/core';
import {patch} from '@app/shared/constants';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Role} from '@app/_models';
import {endpoints} from '@app/shared/endpoints';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor(
    private http: HttpClient
  ) {
  }

  urlToIcon(iconId: number): string {
    return `http://ddragon.leagueoflegends.com/cdn/${patch}/img/profileicon/${iconId}.png`;
  }

  imageByRoleId(roleId: number): string {
    if (roleId === 1) {
      return '/assets/position-support.png';
    }
    if (roleId === 2) {
      return '/assets/position-bot.png';
    }
    if (roleId === 3) {
      return '/assets/position-mid.png';
    }
    if (roleId === 4) {
      return '/assets/position-top.png';
    }
    return '/assets/position-jungle.png';
  }

  roles(): Observable<Role[]> {
    return this.http.get(endpoints.riot.roles)
      .pipe(
        map((response: Role[]) => response),
        catchError(err => throwError(err))
      );
  }
}
