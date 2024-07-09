import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CardItemComponent } from './card-item/card-item.component';
import { CardItemModel } from './models/card-item.model';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  cardsList: CardItemModel[] = [
    {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
      id: 'Fdf5aTYRW0E',
      url: 'https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg',
      viewCount: '1266085',
      likeCount: '18342',
      dislikeCount: '473',
      favoriteCount: '0',
      commentCount: '1255',
      channelTitle: 'Programming with Mosh',
      videoTitle: 'Top 50 Angular Interview Questions',
    },
    {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
      id: 'Fdf5aTYRW0E',
      url: 'https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg',
      viewCount: '1266085',
      likeCount: '18342',
      dislikeCount: '473',
      favoriteCount: '0',
      commentCount: '1255',
      channelTitle: 'Programming with Mosh',
      videoTitle: 'Top 50 Angular Interview Questions',
    },
    {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
      id: 'Fdf5aTYRW0E',
      url: 'https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg',
      viewCount: '1266085',
      likeCount: '18342',
      dislikeCount: '473',
      favoriteCount: '0',
      commentCount: '1255',
      channelTitle: 'Programming with Mosh',
      videoTitle: 'Top 50 Angular Interview Questions',
    },
    {
      kind: 'youtube#video',
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',
      id: 'Fdf5aTYRW0E',
      url: 'https://i.ytimg.com/vi/4KBVkQ7b6yk/mqdefault.jpg',
      viewCount: '1266085',
      likeCount: '18342',
      dislikeCount: '473',
      favoriteCount: '0',
      commentCount: '1255',
      channelTitle: 'Programming with Mosh',
      videoTitle: 'Top 50 Angular Interview Questions',
    },
  ];
}
