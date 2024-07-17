import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const loginService = inject(AuthService);
  const router = inject(Router);

  if (loginService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
