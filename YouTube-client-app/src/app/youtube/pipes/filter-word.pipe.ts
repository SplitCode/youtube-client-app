import { Pipe, PipeTransform } from '@angular/core';

import { VideoItemModel } from '../models/card-item.model';

@Pipe({
  name: 'filterWordPipe',
  standalone: true,
})
export class FilterWordPipe implements PipeTransform {
  transform(cards: VideoItemModel[], filterWord: string | null): VideoItemModel[] {
    if (!filterWord) {
      return cards;
    }
    return cards.filter((card: VideoItemModel) => card.snippet.title.toLowerCase().includes(filterWord.toLowerCase()),);
  }
}
