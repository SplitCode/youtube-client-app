import { CommonModule } from '@angular/common';
import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
  ],
})
export class ButtonComponent {
  @Input() btnClass: string = '';
  @Input() btnAppearence!: 'search' | 'filter' | 'login';
  @Input() isIcon: boolean = false;

  @Output() clicked = new EventEmitter<string>();
}
