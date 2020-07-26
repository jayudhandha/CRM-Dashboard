import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,  private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | import("@angular/router").UrlTree |
    import("rxjs").Observable<boolean |
    import("@angular/router").UrlTree> |
    Promise<boolean | import("@angular/router").UrlTree> {
      const isAuth = this.authService.getAuthenticated();

      // Clear pagination related localstorage
      localStorage.removeItem('pageIndex');
      localStorage.removeItem('pageSize');

      if(!isAuth) {
        console.log('User is not logged in');
        this.router.navigate(['/login']);
      }

      return true;
  }

}
