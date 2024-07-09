import { Injectable } from '@angular/core';

import { CardItemModel } from './components/cards-list/models/card-item.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  // private dataUrl: string = '../assets/mock-response.json';

  protected cardsList: CardItemModel[] = [
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

  // constructor() {}

  getAllCards(): CardItemModel[] {
    return this.cardsList;
  }

  getCardItemById(id: string): CardItemModel | undefined {
    return this.cardsList.find((cardItem) => cardItem.id === id);
  }
}
