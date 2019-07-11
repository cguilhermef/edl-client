import { Component, OnInit } from '@angular/core';
import {AuthService, RiotService} from '@app/_services';
import {Summoner} from '@app/_models';

@Component({
  selector: 'edl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  summoner: Summoner;

  constructor(
    private authService: AuthService,
    private riotService: RiotService
  ) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.summoner = this.authService.getUserCached().summoner;
    this.authService.isLogged.subscribe(
      isLogged => {
        this.isLogged = isLogged;
        this.summoner = this.authService.getUserCached().summoner;
      }
    );
  }

  get urlIcon(): string {
    const summoner = this.authService.getUserCached().summoner;
    return summoner ? this.riotService.urlToIcon(summoner.profileIconId) : null;
  }

  logout() {
    this.authService.logout();
  }
}
