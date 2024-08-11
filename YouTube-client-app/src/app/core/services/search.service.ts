import { effect, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject, catchError, Observable, of
} from 'rxjs';

import { getCardsSuccess } from '../../redux/actions/card.actions';
import { selectCombinedCards } from '../../redux/selectors/card.selector';
import { CardModel } from '../../redux/state.model';
import { CardDataService } from '../../youtube/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private currentQuery: string = '';
  private filterWord$$ = new BehaviorSubject<string>('');
  private cardsList$$ = new BehaviorSubject<CardModel[]>([]);
  private isDateSortClick$$ = new BehaviorSubject<boolean>(false);
  private isViewSortClick$$ = new BehaviorSubject<boolean>(false);

  currentFilterWord$ = this.filterWord$$.asObservable();
  currentCardList$ = this.cardsList$$.asObservable();

  constructor(
    private store: Store,
    private cardDataService: CardDataService,
  ) {
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
    this.currentQuery = query;

    if (query.trim() === '') {
      this.cardsList$$.next([]);
      this.store.dispatch(getCardsSuccess({ cards: [] }));
      return;
    }

    const cardsSignal = this.cardDataService.getCardsDataWithStatistics(query);
    const cards$ = toObservable(cardsSignal);

    cards$.subscribe((cards) => {
      this.cardsList$$.next(cards);
      this.store.dispatch(getCardsSuccess({ cards }));
    });
  }

  loadNextPage(): Observable<boolean> {
    const nextPageToken = this.cardDataService.getNextPageToken();
    if (nextPageToken) {
      const cardsSignal = this.cardDataService.getCardsDataWithStatistics(this.currentQuery, nextPageToken);

      return new Observable<boolean>((subscriber) => {
        effect(() => {
          const cards = cardsSignal();
          if (cards.length > 0) {
            this.cardsList$$.next(cards);
            this.store.dispatch(getCardsSuccess({ cards }));
            subscriber.next(true);
          } else {
            subscriber.next(false);
          }
        });
      }).pipe(
        catchError(() => of(false)),
      );
    }
    return of(false);
  }

  loadPrevPage(): Observable<boolean> {
    const prevPageToken = this.cardDataService.getPrevPageToken();
    if (prevPageToken) {
      const cardsSignal = this.cardDataService.getCardsDataWithStatistics(this.currentQuery, prevPageToken);

      return new Observable<boolean>((subscriber) => {
        effect(() => {
          const cards = cardsSignal();
          if (cards.length > 0) {
            this.cardsList$$.next(cards);
            this.store.dispatch(getCardsSuccess({ cards }));
            subscriber.next(true);
          } else {
            subscriber.next(false);
          }
        });
      }).pipe(
        catchError(() => of(false)),
      );
    }
    return of(false);
  }

  private sortCardsByDate() {
    const cards = [...this.cardsList$$.getValue()];
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
    this.cardsList$$.next(cards);
  }

  private sortCardsByViews() {
    const cards = [...this.cardsList$$.getValue()];
    const isViewSortAscending = this.isViewSortClick$$.getValue();

    cards.sort((a, b) => {
      const viewsA = 'statistics' in a ? parseInt(a.statistics?.viewCount || '0', 10) : 0;
      const viewsB = 'statistics' in b ? parseInt(b.statistics?.viewCount || '0', 10) : 0;
      return isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    this.cardsList$$.next(cards);
  }
}
