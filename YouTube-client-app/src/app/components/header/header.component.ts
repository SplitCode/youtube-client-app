import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../shared/button/button.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SettingImgComponent } from './settings-button/setting-img.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [SearchInputComponent, SettingsButtonComponent, LoginInfoComponent, SettingImgComponent, ButtonComponent, CommonModule]
})
export class HeaderComponent {
  public onClicked(event: any) {
    console.log(event);
  }

  public isFilterShown = false;
}
