import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FilterShowService } from '../../../youtube/main-page/cards-list/services/filter-show-service.service';
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
  ],
})
export class HeaderComponent {
  public isFilterShown: boolean = false;

  constructor(private filterShowService: FilterShowService) {}

  showFilter(): void {
    this.filterShowService.toggleFilterShow();
  }
}
