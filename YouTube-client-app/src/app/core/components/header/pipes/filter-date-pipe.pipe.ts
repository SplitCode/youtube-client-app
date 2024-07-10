import { Pipe, PipeTransform } from '@angular/core';

import { CardItemModel } from '../../../../youtube/main-page/cards-list/models/card-item.model';

@Pipe({
  name: 'filterDatePipe',
  standalone: true,
})
// export class FilterDatePipe implements PipeTransform {
//   transform(cards: CardItemModel[], isDateSortClick: boolean): CardItemModel[] {
//     if (!isDateSortClick) {
//       return cards.sort(
//         (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
//       );
//     }
//     return cards.sort(
//       (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
//     );
//   }
// }
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
