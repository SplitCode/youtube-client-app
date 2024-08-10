import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardStatsComponent } from '../../../components/card-statistic/card-stats.component';
import { CardColorDirective } from '../../../directives/card-color.directive';
import { CardItemModel } from '../../../models/card-item.model';
import { Store } from '@ngrx/store';
import { selectFavoriteVideoIds } from '../../../../redux/selectors/card.selector';
import { map, Observable } from 'rxjs';
import { toggleFavorite } from '../../../../redux/actions/card.actions';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardColorDirective,
    RouterModule,
    CardStatsComponent,
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardItem!: CardItemModel;
  isFavorite$: Observable<boolean>;
  store = inject(Store);

  constructor() {
    this.isFavorite$ = this.store
      .select(selectFavoriteVideoIds)
      .pipe(map((ids) => ids.includes(this.cardItem.id.videoId)));
  }

  toggleFavorite(videoId: string): void {
    this.store.dispatch(toggleFavorite({ videoId }));
    console.log('favorite');
  }
}
