import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CardColorDirective } from '../../../../directives/card-color.directive';
import { CardItemModel } from '../../../../models/card-item.model';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardColorDirective, RouterModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardItem!: CardItemModel;
}
