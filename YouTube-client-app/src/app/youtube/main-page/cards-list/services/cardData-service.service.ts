import { Injectable } from '@angular/core';

import response from '../mock-response.json';
import { CardItemModel } from '../models/card-item.model';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private data = response;

  protected cardsList: CardItemModel[] = [...this.data.items];

  getCards(): CardItemModel[] {
    return this.cardsList;
  }
}
