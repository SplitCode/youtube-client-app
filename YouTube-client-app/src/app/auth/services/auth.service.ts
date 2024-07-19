import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token = 'youtube_auth_token';
  router = inject(Router);

  login(login: string, password: string) {
    if (login && password) {
      localStorage.setItem(this.token, 'fake-token');
    }
    return of(true);
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem(this.token);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.token);
  }
}
