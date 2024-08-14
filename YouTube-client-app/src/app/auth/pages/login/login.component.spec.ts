import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authServiceMock = { login: jest.fn() };
  const routerMock = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('login control should be invalid when empty', () => {
    const { login } = component;
    login?.setValue('');
    expect(login?.valid).toBeFalsy();
    expect(login?.errors?.['required']).toBeTruthy();
  });

  it('password control should be invalid when empty', () => {
    const { password } = component;
    password?.setValue('');
    expect(password?.valid).toBeFalsy();
    expect(password?.errors?.['required']).toBeTruthy();
  });

  it('should call authService login method when form is valid', () => {
    component.login?.setValue('test@example.com');
    component.password?.setValue('Password1!');
    component.onLogin();
    expect(authServiceMock.login).toHaveBeenCalled();
  });

  it('should not call authService login method when form is invalid', () => {
    component.login?.setValue('');
    component.password?.setValue('password1');
    component.onLogin();
    expect(authServiceMock.login).not.toHaveBeenCalled();
  });
});
