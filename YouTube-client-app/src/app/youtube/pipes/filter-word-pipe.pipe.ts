import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../models/card-item.model';

@Pipe({
  name: 'filterWordPipe',
  standalone: true,
})
export class FilterWordPipe implements PipeTransform {
  transform(cards: CardItemModel[], filterWord: string): CardItemModel[] {
    if (!filterWord) {
      return cards;
    }
    return cards.filter((card: CardItemModel) => card.snippet.title.toLowerCase().includes(filterWord.toLowerCase()),);
  }
}
