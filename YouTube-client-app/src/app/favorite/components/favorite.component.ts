import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectFavoriteCards } from '../../redux/selectors/card.selector';
import { CardItemComponent } from '../../youtube/pages/cards-list-page/card-item/card-item.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  store = inject(Store);
  favoriteVideos$ = this.store.select(selectFavoriteCards);
}
