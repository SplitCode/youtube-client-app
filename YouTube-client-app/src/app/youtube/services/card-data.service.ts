import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { CardItemModel, StatisticsResponse } from '../models/card-item.model';
import { CardsListModel } from '../models/cards-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private http = inject(HttpClient);
  private nextPageToken: string | null = null;
  private prevPageToken: string | null = null;

  getCardsData(query: string, pageToken?: string) {
    const url = '/api/search';
    let params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '20')
      .set('q', query);

    if (pageToken) {
      params = params.set('pageToken', pageToken);
    }

    return this.http.get<CardsListModel>(url, { params }).pipe(
      tap((response: CardsListModel) => {
        this.nextPageToken = response.nextPageToken || null;
        this.prevPageToken = response.prevPageToken || null;
      }),
      map((response: CardsListModel) => response.items),
    );
  }

  getStatistics(videoIds: string) {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', videoIds)
      .set('part', 'snippet,statistics');

    return this.http
      .get<StatisticsResponse>(url, { params })
      .pipe(map((response) => response.items));
  }

  getCardsDataWithStatistics(query: string, pageToken?: string): Observable<CardItemModel[]> {
    return this.getCardsData(query, pageToken).pipe(
      switchMap((items) => {
        const videoIds = items.map((item) => item.id.videoId).join(',');
        return this.getStatistics(videoIds).pipe(
          map((statistics) => items.map((item) => ({
            ...item,
            statistics: statistics.find((stat) => stat.id === item.id.videoId)
              ?.statistics,
          }))),
        );
      }),
    );
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
    return this.nextPageToken;
  }

  getPrevPageToken(): string | null {
    return this.prevPageToken;
  }
}
