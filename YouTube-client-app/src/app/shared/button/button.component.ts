import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() btnAppearance!: 'small' | 'middle';
  @Input() btnBorder: 'left-border' | 'right-border' | 'full-border' = 'full-border';
  @Input() btnType: 'button' | 'submit' = 'button';
}
