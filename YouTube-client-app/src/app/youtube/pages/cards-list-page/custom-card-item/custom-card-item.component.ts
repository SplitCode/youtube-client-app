import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardStatsComponent } from '../../../components/card-statistic/card-stats.component';
import { CardColorDirective } from '../../../directives/card-color.directive';
import { CustomCardModel } from '../../../models/custom-card-item.model';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardColorDirective,
    CardStatsComponent,
  ],
  templateUrl: './custom-card-item.component.html',
  styleUrl: './custom-card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardItem!: CustomCardModel;
}
