import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../types/user-role.enum';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuth()) {
    return router.createUrlTree(['/login']);
  }

  if (route.data?.['roles']) {
    const userRole = authService.currentUser()?.role;

    if (!userRole) {
      return router.createUrlTree(['/not-allowed']);
    }

    if (!route.data['roles'].some((role: UserRole) => role === userRole)) {
      return router.createUrlTree(['/not-allowed']);
    }
  }
  return true;
};
