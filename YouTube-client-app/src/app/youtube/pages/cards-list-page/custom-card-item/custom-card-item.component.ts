import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardStatsComponent } from '../../../components/card-statistic/card-stats.component';
import { CardColorDirective } from '../../../directives/card-color.directive';
import { CustomCardModel } from '../../../models/custom-card-item.model';
import { Store } from '@ngrx/store';
import { deleteCard } from '../../../../redux/actions/card.actions';

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
  @Input() card!: CustomCardModel;

  private store = inject(Store);

  deleteCard(cardId: string): void {
    this.store.dispatch(deleteCard({ cardId }));
  }
}
