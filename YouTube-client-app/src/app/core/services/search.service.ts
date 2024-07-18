import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CardDataService } from '../../youtube/services/card-data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>('');
  private cardsList = new BehaviorSubject<CardItemModel[]>([]);
  private isDateSortClick = new BehaviorSubject<boolean>(false);
  private isViewSortClick = new BehaviorSubject<boolean>(false);

  currentSearchQuery = this.searchQuery.asObservable();
  currentCardList = this.cardsList.asObservable();

  constructor(private cardDataService: CardDataService) {
    this.cardsList.next(this.cardDataService.getCards());
  }

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
    this.filterCards();
  }

  updateDateSortClick(isDateSort: boolean) {
    this.isDateSortClick.next(isDateSort);
    this.filterCards();
  }

  updateViewSortClick(isViewSort: boolean) {
    this.isViewSortClick.next(isViewSort);
    this.filterCards();
  }

  private filterCards() {
    let cards = [...this.cardDataService.getCards()];
    const isDateSort = this.isDateSortClick.value;
    const isViewSort = this.isViewSortClick.value;
    const searchQuery = this.searchQuery.getValue().toLowerCase();

    if (searchQuery) {
      cards = cards.filter((card) => card.snippet.title.toLowerCase().includes(searchQuery));
    }

    if (isDateSort) {
      cards = cards.sort((a, b) => {
        const dateA = new Date(a.snippet.publishedAt).getTime();
        const dateB = new Date(b.snippet.publishedAt).getTime();
        return isDateSort ? dateA - dateB : dateB - dateA;
      });
    }

    if (isViewSort) {
      cards = cards.sort((a, b) => {
        const viewsA = parseInt(a.statistics.viewCount, 10);
        const viewsB = parseInt(b.statistics.viewCount, 10);
        return isViewSort ? viewsA - viewsB : viewsB - viewsA;
      });
    }

    this.cardsList.next(cards);
  }
}
