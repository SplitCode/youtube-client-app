import { Component } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { SettingImgComponent } from './setting-img.component';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [ButtonComponent, SettingImgComponent],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
export class SettingsButtonComponent {

}
