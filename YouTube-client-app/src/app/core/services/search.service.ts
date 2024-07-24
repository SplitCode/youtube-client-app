// import { CardDataService } from '../../youtube/services/card-data.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CardItemModel, Statistics } from '../../youtube/models/card-item.model';
import { YouTubeResponse, YouTubeVideoStatisticsResponse } from '../../youtube/models/youtube-response.model';

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

  constructor(private http: HttpClient) {}

  updateSearchQuery(query: string) {
    this.searchQuery$$.next(query);
    this.searchCards(query);
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

  private searchCards(query: string) {
    const url = `${environment.API_URL}/search`;
    const params = new HttpParams()
      .set('key', environment.API_KEY)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', query);
    this.http.get<YouTubeResponse>(url, { params }).pipe(
      map((response) => response.items),
      switchMap((items) => {
        const videoIds = items.map((item) => item.id.videoId).join(',');
        return this.fetchVideoStatistics(videoIds).pipe(
          map((statistics) => items.map((item) => ({
            ...item,
            statistics: statistics.find((stat) => stat.id === item.id.videoId)?.statistics || {
              viewCount: '0',
              likeCount: '0',
              favoriteCount: '0',
              commentCount: '0',
            } as Statistics
          })))
        );
      })
    ).subscribe((cards) => {
      this.cardsList$$.next(cards);
    });
  }

  private fetchVideoStatistics(videoIds: string) {
    const url = `${environment.API_URL}/videos`;
    const params = new HttpParams()
      .set('key', environment.API_KEY)
      .set('id', videoIds)
      .set('part', 'snippet,statistics');

    return this.http.get<YouTubeVideoStatisticsResponse>(url, { params }).pipe(
      map((response) => response.items)
    );
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

// constructor(private cardDataService: CardDataService) {
//   this.cardsList$$.next(this.cardDataService.getCards());
// }

// private searchCards() {
//   let cards = [...this.cardDataService.getCards()];
//   const searchQuery = this.searchQuery$$.getValue().toLowerCase();

//   if (searchQuery) {
//     cards = cards.filter((card) => card.snippet.title.toLowerCase().includes(searchQuery),);
//   }

//   this.cardsList$$.next(cards);
// }
