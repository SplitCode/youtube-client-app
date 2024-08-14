import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';
import {
  createCard, deleteCard, getCards, getCardsFailed, getCardsSuccess, toggleFavorite
} from './card.actions';

describe('Card Actions', () => {
  it('should create getCards action', () => {
    const query = 'test';
    const action = getCards({ query });
    expect(action.type).toBe('[Cards API] Get All Cards');
    expect(action.query).toBe(query);
  });

  it('should create getCardsSuccess action', () => {
    const cards: CardItemModel[] = [{
      kind: 'youtube#video',
      etag: 'etag-value',
      id: {
        kind: 'youtube#video',
        videoId: '12345',
      },
      snippet: {
        publishedAt: '2024-08-01T00:00:00Z',
        channelId: 'UC123456789',
        title: 'Test Video',
        description: 'Test Description',
        thumbnails: {
          default: {
            url: 'https://example.com/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://example.com/medium.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://example.com/high.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Test Channel',
        liveBroadcastContent: 'none',
        publishTime: '2024-08-01T00:00:00Z',
      },
      statistics: {
        viewCount: '1000',
        likeCount: '100',
        favoriteCount: '10',
        commentCount: '20',
      },
    }];
    const action = getCardsSuccess({ cards });
    expect(action.type).toBe('[Cards API] Get Cards Success');
    expect(action.cards).toEqual(cards);
  });

  it('should create getCardsFailed action', () => {
    const error = new Error('Failed to fetch cards');
    const action = getCardsFailed({ error });
    expect(action.type).toBe('[Cards API] Get Cards Failure');
    expect(action.error).toBe(error);
  });

  it('should create createCard action', () => {
    const card: CustomCardModel = {
      id: 'customId',
      title: 'Test title',
      description: 'Test description',
      imgLink: 'https://example.com/default.jpg',
      videoLink: 'https://example.com.mp4',
      date: '2024-08-01T00:00:00Z',
      isCustom: true
    };
    const action = createCard({ card });
    expect(action.type).toBe('[Admin Page] Create Custom Card');
    expect(action.card).toEqual(card);
  });

  it('should create deleteCard action', () => {
    const cardId = '1';
    const action = deleteCard({ cardId });
    expect(action.type).toBe('[Admin Page] Delete Custom Card');
    expect(action.cardId).toBe(cardId);
  });

  it('should create toggleFavorite action', () => {
    const videoId = '123';
    const action = toggleFavorite({ videoId });
    expect(action.type).toBe('[Card] Toggle Favorite');
    expect(action.videoId).toBe(videoId);
  });
});
