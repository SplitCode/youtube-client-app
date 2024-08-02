import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CardDataService } from '../../youtube/services/card-data.service';
import { Store } from '@ngrx/store';
import { CardState } from '../../redux/state.model';
import {
  getCardsSuccess,
  getCardsFailed,
  getCards,
} from '../../redux/actions/card.actions';
import { selectCards } from '../../redux/selectors/card.selector';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private filterWord$$ = new BehaviorSubject<string>('');
  private cardsList$$ = new BehaviorSubject<CardItemModel[]>([]);
  private isDateSortClick$$ = new BehaviorSubject<boolean>(false);
  private isViewSortClick$$ = new BehaviorSubject<boolean>(false);

  currentFilterWord$ = this.filterWord$$.asObservable();
  currentCardList$ = this.cardsList$$.asObservable();

  constructor(private store: Store) {
    this.store.select(selectCards).subscribe((cards) => {
      this.cardsList$$.next(cards);
    });
  }

  updateFilterWord(word: string) {
    this.filterWord$$.next(word);
  }

  updateDateSortClick() {
    this.isDateSortClick$$.next(!this.isDateSortClick$$.getValue());
    this.sortCardsByDate();
  }

  updateViewSortClick() {
    this.isViewSortClick$$.next(!this.isViewSortClick$$.getValue());
    this.sortCardsByViews();
  }

  searchCards(query: string) {
    console.log('Search query:', query);

    if (query.trim() === '') {
      this.cardsList$$.next([]);
      this.store.dispatch(getCardsSuccess({ cards: [], nextPageToken: '' }));
    } else {
      this.store.dispatch(getCards({ query: query.trim() }));
    }
  }

  private sortCardsByDate() {
    const cards = [...this.cardsList$$.getValue()];
    console.log('Cards for sort', cards);
    const isDateSortAscending = this.isDateSortClick$$.getValue();

    cards.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return isDateSortAscending ? dateA - dateB : dateB - dateA;
    });
    console.log(cards);
    this.cardsList$$.next(cards);
  }

  private sortCardsByViews() {
    const cards = [...this.cardsList$$.getValue()];
    const isViewSortAscending = this.isViewSortClick$$.getValue();

    cards.sort((a, b) => {
      const viewsA = parseInt(a.statistics?.viewCount || '0', 10);
      const viewsB = parseInt(b.statistics?.viewCount || '0', 10);
      return isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    this.cardsList$$.next(cards);
  }
}
