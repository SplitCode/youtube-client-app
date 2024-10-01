import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../models/card-item.model';

@Pipe({
  name: 'filterViewsPipe',
  standalone: true,
})
export class FilterViewsPipe implements PipeTransform {
  transform(cards: CardItemModel[], isViewSortClick: boolean): CardItemModel[] {
    if (!cards || cards.length === 0) {
      return [];
    }
    return cards.sort((a, b) => {
      const viewsA = parseInt(a.statistics.viewCount, 10);
      const viewsB = parseInt(b.statistics.viewCount, 10);
      return isViewSortClick ? viewsA - viewsB : viewsB - viewsA;
    });
  }
}
