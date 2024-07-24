import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { CardsListModel } from '../models/cards-list.model';
import { YouTubeVideoStatisticsResponse } from '../models/youtube-response.model';

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

    return this.http.get<YouTubeVideoStatisticsResponse>(url, { params }).pipe(
      map((response) => response.items)
    );
  }

  getCardById(id: string) {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics');

    return this.http.get<CardsListModel>(url, { params }).pipe(
      map((response: CardsListModel) => response.items[0])
    );
  }
}
