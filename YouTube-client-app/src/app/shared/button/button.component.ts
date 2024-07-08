import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    './../../components/header/search-input/search-input.component.scss',
    './../../components/header/settings-button/settings-button.component.scss',
    './../../components/header/login-info/login-info.component.scss',
  ],
})
export class ButtonComponent {
  @Input() btnClass: string = '';
}
