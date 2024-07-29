import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { HeaderService } from '../../services/header-service';
import { FilterComponent } from './filters/filter.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    SearchInputComponent,
    LoginInfoComponent,
    CommonModule,
    SettingsButtonComponent,
    ButtonComponent,
    FilterComponent,
  ],
})
export class HeaderComponent {
  authService = inject(AuthService);
  headerService = inject(HeaderService);
  router = inject(Router);

  isSettingsVisible$ = this.headerService.isSettingsVisible$$;
  isFilterShown$ = this.headerService.isFilterShown$$;
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  toggleFilter(): void {
    this.headerService.toggleFilter();
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
  }
}
