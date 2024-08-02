import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CardDataService } from '../../youtube/services/card-data.service';
import { Store } from '@ngrx/store';
import { CardState } from '../../redux/reducers/reducer';
import { getCardsSuccess, getCardsFailed, getCards } from '../../redux/actions/card.actions';

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

  // private cardDataService = inject(CardDataService);
  private store = inject(Store);

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
    const cards = this.cardsList$$.getValue();
    const isDateSortAscending = this.isDateSortClick$$.getValue();

    cards.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return isDateSortAscending ? dateA - dateB : dateB - dateA;
    });
    this.cardsList$$.next(cards);
  }

  private sortCardsByViews() {
    let cards = this.cardsList$$.getValue();
    const isViewSortAscending = this.isViewSortClick$$.getValue();

    cards = cards.sort((a, b) => {
      const viewsA = parseInt(a.statistics?.viewCount || '0', 10);
      const viewsB = parseInt(b.statistics?.viewCount || '0', 10);
      return isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    this.cardsList$$.next(cards);
  }
}



    // searchCards(query: string) {
  //   console.log('Search query:', query);

  //   if (query.trim() === '') {
  //     this.cardsList$$.next([]);
  //     this.store.dispatch(getCardsSuccess({
  //       cards: [],
  //       nextPageToken: ''
  //     }))
  //   } else {
  //     this.cardDataService
  //       .getCardsDataWithStatistics(query)
  //       .subscribe((cards) => {
  //         console.log('Cards from service:', cards);
  //         this.cardsList$$.next(cards);
  //         this.store.dispatch(getCardsSuccess({
  //           cards,
  //           nextPageToken: ''
  //         }));
  //       },
  //     (error) => {
  //       console.error('Error fetching cards', error);
  //       this.store.dispatch(getCardsFailed({ error }))
  //     });
  //   }
  // }
