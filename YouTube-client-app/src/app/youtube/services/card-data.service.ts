import { Injectable } from '@angular/core';

import * as response from '../mocks/mock-response.json';
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

  getCardById(id: string): CardItemModel {
    const card = this.cardsList.find((cardItem) => cardItem.id === id);
    if (!card) {
      throw new Error(`Card with id ${id} not found`);
    }
    return card;
  }
}
