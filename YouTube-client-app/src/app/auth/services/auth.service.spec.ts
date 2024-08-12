import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let routerSpy: jest.SpyInstance;
  const token = 'youtube_auth_token';

  beforeEach(() => {
    localStorage.clear();

    const routerMock = {
      navigate: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(AuthService);
    routerSpy = jest.spyOn(routerMock, 'navigate');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initially unauthenticated if there is no token in localStorage', () => {
    const authState = service.isAuthenticated;
    expect(authState).toBe(false);
  });

  it('should be authenticated if there is a token in localStorage', () => {
    localStorage.setItem(token, 'fake-token');
    service.login();
    const authState = service.isAuthenticated;
    expect(authState).toBe(true);
  });

  it('should set token and navigate to /main on login', () => {
    service.login();

    expect(localStorage.getItem(token)).toBe('fake-token');
    expect(routerSpy).toHaveBeenCalledWith(['/main']);
    expect(service.isAuthenticated).toBe(true);
  });

  it('should remove token and navigate to /login on logout', () => {
    localStorage.setItem(token, 'fake-token');
    service.logout();

    expect(localStorage.getItem(token)).toBeNull();
    expect(routerSpy).toHaveBeenCalledWith(['/login']);
    expect(service.isAuthenticated).toBe(false);
  });
});
