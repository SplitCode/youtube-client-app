import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { StatisticsResponse } from '../models/card-item.model';
import { CardsListModel } from '../models/cards-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private http = inject(HttpClient);

  getCardsData(query: string) {
    const url = '/api/search';
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', query);

    return this.http.get<CardsListModel>(url, { params }).pipe(
      map((response: CardsListModel) => response.items)
    );
  }

  getStatistics(videoIds: string) {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', videoIds)
      .set('part', 'snippet,statistics');

    return this.http.get<StatisticsResponse>(url, { params }).pipe(
      map((response) => response.items)
    );
  }

  getCardsDataWithStatistics(query: string) {
    return this.getCardsData(query).pipe(
      switchMap((items) => {
        const videoIds = items.map((item) => item.id.videoId).join(',');
        return this.getStatistics(videoIds).pipe(
          map((statistics) => items.map((item) => ({
            ...item,
            statistics: statistics.find((stat) => stat.id === item.id.videoId)?.statistics
          })))
        );
      })
    );
  }

  getCardById(ids: string) {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', ids)
      .set('part', 'snippet,statistics');

    return this.http.get<CardsListModel>(url, { params }).pipe(
      map((response: CardsListModel) => response.items[0])
    );
  }
}
