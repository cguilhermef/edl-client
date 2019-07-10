import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/_services';

@Component({
  selector: 'edl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLogged = this.authService.isAuthenticated();
    this.authService.isLogged.subscribe(
      isLogged => this.isLogged = isLogged
    );
  }

  logout() {
    this.authService.logout();
  }
}
