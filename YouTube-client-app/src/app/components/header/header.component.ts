import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { FilterComponent } from '../filters/filter.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SettingImgComponent } from './settings-button/setting-img.component';

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
    FilterComponent,
  ],
})
export class HeaderComponent {
  public isFilterShown = false;
}
