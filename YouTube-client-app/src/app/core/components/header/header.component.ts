import { CommonModule } from '@angular/common';
import {
  Component, inject, OnDestroy, OnInit
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { AuthService } from '../../../auth/services/auth.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
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
export class HeaderComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  router = inject(Router);

  public isFilterShown: boolean = false;
  public isSettingsVisible: boolean = true;
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.isSettingsVisible = !event.urlAfterRedirects.startsWith('/main/details/');
      })
    );
  }

  toggleFilter(): void {
    this.isFilterShown = !this.isFilterShown;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
