import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';
import { combineLatest, map, Observable } from 'rxjs';
import { CardItemModel } from '../../models/card-item.model';
import { CardModel } from '../../../redux/state.model';
import {
  selectFavoriteVideoIds,
  selectNextPageToken,
  selectPrevPageToken,
} from '../../../redux/selectors/card.selector';
import { Store } from '@ngrx/store';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CustomCardItemComponent } from './custom-card-item/custom-card-item.component';
import { CustomCardModel } from '../../models/custom-card-item.model';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent,
    FilterWordPipe,
    PaginationComponent,
    CustomCardItemComponent,
  ],
  templateUrl: './cards-list-page.component.html',
  styleUrl: './cards-list-page.component.scss',
})
export class CardsListComponent {
  filterWord$ = this.searchService.currentFilterWord$;
  cardsList$: Observable<CardModel[]>;
  // favoriteVideoIds$: Observable<string[]>;
  @Input() currentQuery: string = '';
  nextPageToken$: Observable<string | undefined>;
  prevPageToken$: Observable<string | undefined>;

  constructor(
    private searchService: SearchService,
    private store: Store,
  ) {
    this.cardsList$ = this.searchService.currentCardList$;
    // this.favoriteVideoIds$ = this.store.select(selectFavoriteVideoIds);
    this.nextPageToken$ = this.store.select(selectNextPageToken);
    this.prevPageToken$ = this.store.select(selectPrevPageToken);
    this.searchService.currentFilterWord$.subscribe((query) => {
      this.currentQuery = query;
    });
  }

  isCustom(card: CardModel): card is CustomCardModel {
    return 'isCustom' in card;
  }
}
