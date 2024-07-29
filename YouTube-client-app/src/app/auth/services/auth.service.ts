import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly token = 'youtube_auth_token';
  private isAuthenticated$$ = new BehaviorSubject<boolean>(this.isAuthenticated);
  isAuthenticated$ = this.isAuthenticated$$.asObservable();
  router = inject(Router);

  login(login: string, password: string): Observable<boolean> {
    if (login && password) {
      localStorage.setItem(this.token, 'fake-token');
      this.isAuthenticated$$.next(true);
      return of(true);
    }
    return of(false);
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
