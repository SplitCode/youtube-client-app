import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  route,
  state: RouterStateSnapshot,
): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const { isAuthenticated } = authService;
  const { url } = state;

  if (url === '/login') {
    if (isAuthenticated) {
      return router.parseUrl('/main');
    }
    return true;
  }

  if (!isAuthenticated) {
    return router.parseUrl('/login');
  }
  return true;
};
