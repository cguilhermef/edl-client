import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '@app/_services';

@Injectable({
  providedIn: 'root'
})
export class AccountConfirmedGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    if ( !this.authService.isAuthenticated() ) {
      this.router.navigateByUrl('/account/login');
      return false;
    }
    if (!this.authService.getUserCached().account_verified) {
      this.router.navigateByUrl('/account/link-account');
      return false;
    }
    return true;
  }
}
