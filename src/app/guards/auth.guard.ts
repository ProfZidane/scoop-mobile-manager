import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = localStorage.getItem('mobile-token');
      let user = JSON.parse(localStorage.getItem('userData'));

      if (token !== null && user.is_super_manager === 1) {

          return true;
        
      } else {
        console.log('Non autorisé !');

        this.router.navigateByUrl('/');
        return false;
      }

  }

}
