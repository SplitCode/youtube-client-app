import { Injectable } from '@angular/core';

import { CardItemModel } from './components/cards-list/models/card-item.model';
import response from './mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private data = response;

  protected cardsList: CardItemModel[] = [...this.data.items];

  getCards(): CardItemModel[] {
    return this.cardsList;
  }
}
