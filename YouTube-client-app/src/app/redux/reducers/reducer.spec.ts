import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';
import {
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  toggleFavorite,
} from '../actions/card.actions';
import { CardState, initialState } from '../state.model';
import { cardsReducer } from './reducer';

describe('Cards Reducer', () => {
  it('should update the state with cards on getCardsSuccess action', () => {
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
    const state = cardsReducer(initialState, action);
    expect(state.videoEntities['12345']).toEqual(cards[0]);
    expect(state.videoIds).toEqual(['12345']);
  });

  it('should set error to null on getCards action', () => {
    const action = getCards({ query: 'test' });
    const state = cardsReducer(initialState, action);
    expect(state.error).toBeNull();
  });

  it('should set an error message on getCardsFailed action', () => {
    const error = new Error('Failed to fetch cards');
    const action = getCardsFailed({ error });
    const state = cardsReducer(initialState, action);
    expect(state.error).toBe(error.message);
  });

  it('should add a custom card on createCard action', () => {
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
    const state = cardsReducer(initialState, action);
    expect(state.customCards).toContain(card);
  });

  it('should delete a custom card on deleteCard action', () => {
    const customCardState: CardState = {
      ...initialState,
      customCards: [{
        id: 'customId',
        title: 'Test title',
        description: 'Test description',
        imgLink: 'https://example.com/default.jpg',
        videoLink: 'https://example.com.mp4',
        date: '2024-08-01T00:00:00Z',
        isCustom: true
      }],
    };
    const action = deleteCard({ cardId: 'customId' });
    const state = cardsReducer(customCardState, action);
    expect(state.customCards.length).toBe(0);
  });

  it('should toggle a favorite video ID on toggleFavorite action', () => {
    const favoriteState: CardState = {
      ...initialState,
      favoriteVideoIds: ['1'],
    };
    const action = toggleFavorite({ videoId: '1' });
    const state = cardsReducer(favoriteState, action);
    expect(state.favoriteVideoIds).not.toContain('1');
  });
});
