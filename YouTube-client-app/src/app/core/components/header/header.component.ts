import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { HeaderService } from '../../services/header.service';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
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
    FavoriteButtonComponent,
    ButtonComponent,
    FilterComponent,
    RouterModule,
  ],
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private headerService = inject(HeaderService);

  isSettingsVisible$ = this.headerService.isSettingsVisible$$;
  isFilterShown$ = this.headerService.isFilterShown$$;
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  toggleFilter(): void {
    this.headerService.toggleFilter();
  }

  logout(): void {
    this.authService.logout();
  }
}
