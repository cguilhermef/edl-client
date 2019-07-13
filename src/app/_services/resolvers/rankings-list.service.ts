import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Ranking} from '@app/_models';
import {RankingsService} from '../rankings.service';

@Injectable({
  providedIn: 'root'
})
export class RankingsListService implements Resolve<Observable<Ranking[]>> {

  constructor(
    private service: RankingsService
  ) {
  }

  resolve(): Observable<Ranking[]> {
    return this.service.index();
  }
}
