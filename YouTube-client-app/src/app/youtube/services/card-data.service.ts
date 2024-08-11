import { HttpClient, HttpParams } from '@angular/common/http';
import {
  computed, inject, Injectable, Signal, signal
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs/operators';

import {
  CardItemModel,
  StatisticsModel,
  StatisticsResponse,
} from '../models/card-item.model';
import { CardsListModel } from '../models/cards-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private http = inject(HttpClient);

  private nextPageToken = signal<string | null>(null);
  private prevPageToken = signal<string | null>(null);

  getCardsData(query: string, pageToken?: string): Signal<CardItemModel[]> {
    const url = '/api/search';
    let params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '20')
      .set('q', query);

    if (pageToken) {
      params = params.set('pageToken', pageToken);
    }

    const observable = this.http.get<CardsListModel>(url, { params }).pipe(
      tap((response: CardsListModel) => {
        this.nextPageToken.set(response.nextPageToken || null);
        this.prevPageToken.set(response.prevPageToken || null);
      }),
      map((response: CardsListModel) => response.items),
    );

    return toSignal(observable, { initialValue: [] });
  }

  getStatistics(videoIds: string): Signal<StatisticsModel[]> {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', videoIds)
      .set('part', 'snippet,statistics');

    const observable = this.http.get<StatisticsResponse>(url, { params }).pipe(
      map((response) => response.items),
    );

    return toSignal(observable, { initialValue: [] });
  }

  getCardsDataWithStatistics(query: string, pageToken?: string): Signal<CardItemModel[]> {
    const itemsSignal = this.getCardsData(query, pageToken);

    const combinedSignal = computed(() => {
      const items = itemsSignal();
      if (items.length === 0) return [];

      const videoIds = items.map((item) => item.id.videoId).join(',');
      const statistics = this.getStatistics(videoIds)();

      return items.map((item) => ({
        ...item,
        statistics: statistics.find((stat) => stat.id === item.id.videoId)?.statistics,
      }));
    });

    return combinedSignal;
  }

  getCardById(ids: string) {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', ids)
      .set('part', 'snippet,statistics');

    return this.http
      .get<CardsListModel>(url, { params })
      .pipe(map((response: CardsListModel) => response.items[0]));
  }

  getNextPageToken(): string | null {
    return this.nextPageToken();
  }

  getPrevPageToken(): string | null {
    return this.prevPageToken();
  }
}
