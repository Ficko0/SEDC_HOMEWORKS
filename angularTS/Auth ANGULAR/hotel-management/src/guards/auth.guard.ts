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
  // Inject the services and the router
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is authenticated
  if (!authService.isAuth()) {
    return router.createUrlTree(['/login']);
  }

  // Check if he's authenticated and whether he has the correct role
  if (route.data?.['roles']) {
    const userRole = authService.currentUser()?.role;

    // Check if he's allowed to view the provided content
    if (!userRole) {
      return router.createUrlTree(['/not-allowed']);
    }

    // Check if the role is matching with the role in the data property from the app.routes.ts file
    if (!route.data['roles'].some((role: UserRole) => role === userRole)) {
      return router.createUrlTree(['/not-allowed']);
    }
  }

  return true;
};
