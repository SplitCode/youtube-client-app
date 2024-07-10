import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { FilterShowService } from '../../../youtube/main-page/cards-list/services/filter-show-service.service';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SettingImgComponent } from './settings-button/setting-img.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    SearchInputComponent,
    LoginInfoComponent,
    SettingImgComponent,
    ButtonComponent,
    CommonModule,
    SettingsButtonComponent,
  ],
})
export class HeaderComponent {
  @Output() searchSubmitted = new EventEmitter<boolean>();
  public isFilterShown: boolean = false;

  constructor(private filterShowService: FilterShowService) {}

  showFilter(): void {
    this.filterShowService.toggleFilterShow();
  }

  onSubmitForm() {
    this.searchSubmitted.emit(true);
  }
}
