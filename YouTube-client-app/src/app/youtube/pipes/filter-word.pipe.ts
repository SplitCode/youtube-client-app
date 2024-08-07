import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../models/card-item.model';
import { CardModel } from '../../redux/state.model';

@Pipe({
  name: 'filterWordPipe',
  standalone: true,
})
export class FilterWordPipe implements PipeTransform {
  transform(cards: CardModel[], filterWord: string | null): CardModel[] {
    if (!filterWord) {
      return cards;
    }
    return cards.filter((card: CardModel) => {
      if ('isCustom' in card) {
        return card.title.toLowerCase().includes(filterWord.toLowerCase());
      } else {
        return card.snippet.title
          .toLowerCase()
          .includes(filterWord.toLowerCase());
      }
    });
  }
}
