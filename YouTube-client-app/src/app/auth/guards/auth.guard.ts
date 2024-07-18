import { inject } from '@angular/core';
import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();
  const { url } = state;

  if (url === '/login') {
    if (isAuthenticated) {
      router.navigate(['/main']);
      return false;
    }
    return true;
  }

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
