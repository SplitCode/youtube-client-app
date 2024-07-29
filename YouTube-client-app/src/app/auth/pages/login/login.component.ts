import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), this.passwordValidator]),
  });

  authService = inject(AuthService);
  router = inject(Router);

  onLogin() {
    if (this.loginForm.valid) {
      const { login, password } = this.loginForm.value;
      this.authService.login(login!, password!).subscribe(() => {
        this.router.navigate(['/main']);
      });
    }
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const { value } = control;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#?$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(value);
    const isValid = hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
    return isValid ? null : {
      passwordValidator: {
        message: "Your password isn't strong enough. It should include a mixture of both uppercase and lowercase letters, letters and numbers, and at least one special character."
      }
    };
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

// form.reset({ first: 'name', last: 'last name' });
