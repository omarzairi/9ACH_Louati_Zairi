import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../Services/auth-user.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileguardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthUserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.userLogged()) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: { redrict: state.url },
      });
      return false;
    }
  }
}
