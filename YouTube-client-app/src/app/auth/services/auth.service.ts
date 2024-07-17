import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token = 'youtube_auth_token';

  login(login: string, password: string) {
    if (login && password) {
      localStorage.setItem(this.token, 'fake-token');
    }
    return of(true);
  }

  logout() {
    localStorage.removeItem(this.token);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.token);
  }
}
