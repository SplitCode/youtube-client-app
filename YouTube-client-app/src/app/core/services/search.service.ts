import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Store } from '@ngrx/store';
import { CardModel } from '../../redux/state.model';
import { getCardsSuccess, getCards } from '../../redux/actions/card.actions';
import { selectCombinedCards } from '../../redux/selectors/card.selector';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private filterWord$$ = new BehaviorSubject<string>('');
  private cardsList$$ = new BehaviorSubject<CardModel[]>([]);
  private isDateSortClick$$ = new BehaviorSubject<boolean>(false);
  private isViewSortClick$$ = new BehaviorSubject<boolean>(false);

  currentFilterWord$ = this.filterWord$$.asObservable();
  currentCardList$ = this.cardsList$$.asObservable();

  constructor(private store: Store) {
    this.store.select(selectCombinedCards).subscribe((cards) => {
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
      this.store.dispatch(getCardsSuccess({ cards: [] }));
    } else {
      this.store.dispatch(getCards({ query: query.trim() }));
    }
  }

  private sortCardsByDate() {
    const cards = [...this.cardsList$$.getValue()];
    console.log('Cards for sort', cards);
    const isDateSortAscending = this.isDateSortClick$$.getValue();

    cards.sort((a, b) => {
      const dateA = new Date(
        'snippet' in a ? a.snippet.publishedAt : a.date,
      ).getTime();
      const dateB = new Date(
        'snippet' in b ? b.snippet.publishedAt : b.date,
      ).getTime();
      return isDateSortAscending ? dateA - dateB : dateB - dateA;
    });
    console.log(cards);
    this.cardsList$$.next(cards);
  }

  private sortCardsByViews() {
    const cards = [...this.cardsList$$.getValue()];
    const isViewSortAscending = this.isViewSortClick$$.getValue();

    cards.sort((a, b) => {
      const viewsA =
        'statistics' in a ? parseInt(a.statistics?.viewCount || '0', 10) : 0;
      const viewsB =
        'statistics' in b ? parseInt(b.statistics?.viewCount || '0', 10) : 0;
      return isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    this.cardsList$$.next(cards);
  }

  searchNextPage(query: string, nextPageToken: string) {
    console.log('next query', query);
    this.store.dispatch(getCards({ query, pageToken: nextPageToken }));
  }

  searchPrevPage(query: string, prevPageToken: string) {
    console.log('prev query', query);
    this.store.dispatch(getCards({ query, pageToken: prevPageToken }));
  }

  // searchNextPage(nextPageToken: string) {
  //   this.store.dispatch(getCards({ pageToken: nextPageToken }));
  // }

  // searchPrevPage(prevPageToken: string) {
  //   this.store.dispatch(getCards({ pageToken: prevPageToken }));
  // }
}
