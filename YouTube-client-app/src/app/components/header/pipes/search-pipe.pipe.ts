import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../../../youtube/main-page/cards-list/models/card-item.model';

@Pipe({
  name: 'searchPipe',
  standalone: true,
})
export class SearchPipePipe implements PipeTransform {
  cards: CardItemModel[] = [];
  searchQuery: string = '';

  transform(cards: CardItemModel[], searchQuery: string): CardItemModel[] {
    if (!searchQuery) {
      return cards;
    }
    return cards.filter((card: CardItemModel) => card.snippet.title.toLowerCase().includes(searchQuery.toLowerCase()),);
  }
}
