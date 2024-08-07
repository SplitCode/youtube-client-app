import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';
import { combineLatest, map, Observable } from 'rxjs';
import { CardItemModel } from '../../models/card-item.model';
import { CardModel } from '../../../redux/state.model';
import {
  selectCards,
  selectCombinedCards,
  selectCurrentPage,
  selectCustomCards,
  selectFavoriteVideoIds,
} from '../../../redux/selectors/card.selector';
import { Store } from '@ngrx/store';
import { setCurrentPage } from '../../../redux/actions/card.actions';
// import { Card } from '../../../redux/state.model';
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
  favoriteVideoIds$: Observable<string[]>;
  currentPage$: Observable<number>;

  constructor(
    private searchService: SearchService,
    private store: Store,
  ) {
    this.cardsList$ = this.searchService.currentCardList$;
    this.favoriteVideoIds$ = this.store.select(selectFavoriteVideoIds);
    this.currentPage$ = this.store.select(selectCurrentPage);
  }

  onPageChange(newPage: number) {
    this.store.dispatch(setCurrentPage({ page: newPage }));
  }

  isCustomCardModel(card: CardModel): card is CustomCardModel {
    return 'isCustom' in card && card.isCustom;
  }
}

// this.cardsList$ = combineLatest([
//   this.store.select(selectCards),
//   this.store.select(selectCustomCards),
// ]).pipe(
//   map(([standardCards, customCards]) => [...customCards, ...standardCards]),
// );
