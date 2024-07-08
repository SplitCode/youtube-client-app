import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ButtonComponent } from '../../../shared/button/button.component';
import { SettingImgComponent } from './setting-img.component';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [ButtonComponent, SettingImgComponent, MatIconModule, MatButtonModule],
  templateUrl: './settings-button.component.html',
  styleUrl: './settings-button.component.scss'
})
export class SettingsButtonComponent {

}
