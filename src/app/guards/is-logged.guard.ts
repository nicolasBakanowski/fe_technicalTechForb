import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from '../services/token/token.service';

@Injectable({ providedIn: 'root' })
class LoggedGuard {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = new TokenService();
    return token.isTokenPresent();
  }
}
export const IsLoggedGuad: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(LoggedGuard).canActivate(route, state);
};
