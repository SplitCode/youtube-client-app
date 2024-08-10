import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectFavoriteCards } from '../../redux/selectors/card.selector';
import { CardItemModel } from '../../youtube/models/card-item.model';
import { CardItemComponent } from '../../youtube/pages/cards-list-page/card-item/card-item.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
})
export class FavoriteComponent {
  favoriteVideos$: Observable<CardItemModel[]>;
  store = inject(Store);

  constructor() {
    this.favoriteVideos$ = this.store.select(selectFavoriteCards);
  }
}
