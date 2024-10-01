import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../models/card-item.model';

@Pipe({
  name: 'filterDatePipe',
  standalone: true,
})
export class FilterDatePipe implements PipeTransform {
  transform(cards: CardItemModel[], isDateSortClick: boolean): CardItemModel[] {
    if (!cards || cards.length === 0) {
      return [];
    }
    return cards.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return isDateSortClick ? dateA - dateB : dateB - dateA;
    });
  }
}
