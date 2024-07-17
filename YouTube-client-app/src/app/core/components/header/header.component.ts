import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FilterToggleService } from '../../../youtube/services/filter-toggle.service';
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
  ],
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public isFilterShown: boolean = false;

  constructor(private filterToggleService: FilterToggleService) {}

  toggleFilter(): void {
    this.filterToggleService.toggleFilterShow();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
