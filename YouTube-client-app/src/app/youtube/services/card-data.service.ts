import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { VideoItemModel } from '../models/card-item.model';
import { CardsListModel } from '../models/cards-list.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private http = inject(HttpClient);

  getCardsData(query: string): Observable<VideoItemModel[]> {
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

  getStatistics(videoIds: string[]): Observable<VideoItemModel[]> {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', videoIds.join(','))
      .set('part', 'snippet,statistics');

    return this.http.get<CardsListModel>(url, { params }).pipe(
      map((response: CardsListModel) => response.items)
    );
  }

  getCardById(id: string): Observable<VideoItemModel> {
    const url = '/api/videos';
    const params = new HttpParams()
      .set('id', id)
      .set('part', 'snippet,statistics');

    return this.http.get<CardsListModel>(url, { params }).pipe(
      map((response: CardsListModel) => response.items[0])
    );
  }
}
