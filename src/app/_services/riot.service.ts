import { Injectable } from '@angular/core';
import { patch } from '@app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class RiotService {

  constructor() { }

  urlToIcon(iconId: number): string {
    return `http://ddragon.leagueoflegends.com/cdn/${ patch }/img/profileicon/${ iconId }.png`;
  }
}
