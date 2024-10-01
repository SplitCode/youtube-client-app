import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token = 'youtube_auth_token';
  private isAuthenticated$$ = new BehaviorSubject<boolean>(
    !!localStorage.getItem(this.token),
  );
  private router = inject(Router);
  isAuthenticated$ = this.isAuthenticated$$.asObservable();

  login(): void {
    localStorage.setItem(this.token, 'fake-token');
    this.router.navigate(['/main']);
    this.isAuthenticated$$.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.isAuthenticated$$.next(false);
    this.router.navigate(['/login']);
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticated$$.value;
  }
}
