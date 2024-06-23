import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageEnterGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(): MaybeAsync<GuardResult> {
    return this.loginService.$isAuthorized.pipe(
      map(isAuthorized => {
        if (!isAuthorized) {
          this.router.navigate(['/login']);
        }
        return isAuthorized;
      })
    );
  }
}
