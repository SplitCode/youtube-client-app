import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/button/button.component';
import { CardColorDirective } from '../directives/card-color.directive';
import { CardItemModel } from '../models/card-item.model';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardColorDirective],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardItem!: CardItemModel;
}
