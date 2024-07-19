import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CardDataService } from '../../youtube/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery$$ = new BehaviorSubject<string>('');
  private filterWord$$ = new BehaviorSubject<string>('');
  private cardsList$$ = new BehaviorSubject<CardItemModel[]>([]);
  private isDateSortClick$$ = new BehaviorSubject<boolean>(false);
  private isViewSortClick$$ = new BehaviorSubject<boolean>(false);

  currentSearchQuery$ = this.searchQuery$$.asObservable();
  currentFilterWord$ = this.filterWord$$.asObservable();
  currentCardList$ = this.cardsList$$.asObservable();

  constructor(private cardDataService: CardDataService) {
    this.cardsList$$.next(this.cardDataService.getCards());
  }

  updateSearchQuery(query: string) {
    this.searchQuery$$.next(query);
    this.searchCards();
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

  private searchCards() {
    let cards = [...this.cardDataService.getCards()];
    const searchQuery = this.searchQuery$$.getValue().toLowerCase();

    if (searchQuery) {
      cards = cards.filter((card) => card.snippet.title.toLowerCase().includes(searchQuery),);
    }

    this.cardsList$$.next(cards);
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
      const viewsA = parseInt(a.statistics.viewCount, 10);
      const viewsB = parseInt(b.statistics.viewCount, 10);
      return isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    this.cardsList$$.next(cards);
  }
}
