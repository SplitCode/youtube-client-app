import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from '../../../core/services/logger.service';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  authService = inject(AuthService);
  router = inject(Router);
  logger = inject(LoggerService);

  onLogin() {
    this.logger.logMessage('llll');
    this.authService.login(this.login, this.password).subscribe(() => {
      this.router.navigate(['/main']);
    });
  }
}
