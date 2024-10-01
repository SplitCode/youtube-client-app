import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  catchError, map, Observable, of, tap
} from 'rxjs';

import {
  getCardsSuccess, sortCardsByDate, sortCardsByViews, updateDateSortClick, updateFilterWord, updateViewSortClick
} from '../../redux/actions/card.actions';
import { CardDataService } from '../../youtube/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private currentQuery: string = '';

  constructor(
    private store: Store,
    private cardDataService: CardDataService,
  ) {}

  updateFilterWord(word: string) {
    this.store.dispatch(updateFilterWord({ word }));
  }

  updateDateSortClick() {
    this.store.dispatch(updateDateSortClick());
    this.sortCardsByDate();
  }

  updateViewSortClick() {
    this.store.dispatch(updateViewSortClick());
    this.sortCardsByViews();
  }

  searchCards(query: string) {
    this.currentQuery = query;

    if (query.trim() === '') {
      this.store.dispatch(getCardsSuccess({ cards: [] }));
      return;
    }

    this.cardDataService
      .getCardsDataWithStatistics(query)
      .subscribe((cards) => {
        this.store.dispatch(getCardsSuccess({ cards }));
      });
  }

  loadNextPage(): Observable<boolean> {
    const nextPageToken = this.cardDataService.getNextPageToken();
    if (nextPageToken) {
      return this.cardDataService
        .getCardsDataWithStatistics(this.currentQuery, nextPageToken)
        .pipe(
          tap((cards) => {
            this.store.dispatch(getCardsSuccess({ cards }));
          }),
          map(() => true),
          catchError(() => of(false)),
        );
    }
    return of(false);
  }

  loadPrevPage(): Observable<boolean> {
    const prevPageToken = this.cardDataService.getPrevPageToken();
    if (prevPageToken) {
      return this.cardDataService
        .getCardsDataWithStatistics(this.currentQuery, prevPageToken)
        .pipe(
          tap((cards) => {
            this.store.dispatch(getCardsSuccess({ cards }));
          }),
          map(() => true),
          catchError(() => of(false)),
        );
    }
    return of(false);
  }

  private sortCardsByDate() {
    this.store.dispatch(sortCardsByDate());
  }

  private sortCardsByViews() {
    this.store.dispatch(sortCardsByViews());
  }
}
