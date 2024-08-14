import { CardState } from '../state.model';
import {
  selectCards,
  selectCombinedCards,
  selectCustomCards,
  selectFavoriteCards,
  selectFavoriteVideoIds,
  selectVideoEntities,
  selectVideoIds
} from './card.selector';

describe('Card Selectors', () => {
  const initialState: CardState = {
    customCards: [
      {
        id: '1', title: 'Custom Card 1', description: '', imgLink: '', videoLink: '', date: '', isCustom: true
      },
    ],
    videoEntities: {
      2: {
        kind: 'youtube#video',
        etag: 'etag-value',
        id: { kind: 'youtube#video', videoId: '2' },
        snippet: {
          publishedAt: '',
          channelId: '',
          title: 'Video 2',
          description: '',
          thumbnails: {
            default: { url: '', width: 120, height: 90 },
            medium: { url: '', width: 320, height: 180 },
            high: { url: '', width: 480, height: 360 }
          },
          channelTitle: '',
          liveBroadcastContent: '',
          publishTime: ''
        },
        statistics: {
          viewCount: '', likeCount: '', favoriteCount: '', commentCount: ''
        }
      },
      3: {
        kind: 'youtube#video',
        etag: 'etag-value',
        id: { kind: 'youtube#video', videoId: '3' },
        snippet: {
          publishedAt: '',
          channelId: '',
          title: 'Video 3',
          description: '',
          thumbnails: {
            default: { url: '', width: 120, height: 90 },
            medium: { url: '', width: 320, height: 180 },
            high: { url: '', width: 480, height: 360 }
          },
          channelTitle: '',
          liveBroadcastContent: '',
          publishTime: ''
        },
        statistics: {
          viewCount: '', likeCount: '', favoriteCount: '', commentCount: ''
        }
      },
    },
    videoIds: ['2', '3'],
    favoriteVideoIds: ['3'],
    error: null
  };

  it('should select custom cards', () => {
    const result = selectCustomCards.projector(initialState);
    expect(result).toEqual(initialState.customCards);
  });

  it('should select video entities', () => {
    const result = selectVideoEntities.projector(initialState);
    expect(result).toEqual(initialState.videoEntities);
  });

  it('should select video ids', () => {
    const result = selectVideoIds.projector(initialState);
    expect(result).toEqual(initialState.videoIds);
  });

  it('should select cards based on video ids and video entities', () => {
    const result = selectCards.projector(initialState.videoEntities, initialState.videoIds);
    expect(result).toEqual([
      initialState.videoEntities['2'],
      initialState.videoEntities['3']
    ]);
  });

  it('should select combined cards (custom and standard)', () => {
    const result = selectCombinedCards.projector(initialState.customCards, [
      initialState.videoEntities['2'],
      initialState.videoEntities['3']
    ]);
    expect(result).toEqual([
      initialState.customCards[0],
      initialState.videoEntities['2'],
      initialState.videoEntities['3']
    ]);
  });

  it('should select favorite video ids', () => {
    const result = selectFavoriteVideoIds.projector(initialState);
    expect(result).toEqual(initialState.favoriteVideoIds);
  });

  it('should select favorite cards based on favorite video ids', () => {
    const result = selectFavoriteCards.projector(initialState.videoEntities, initialState.favoriteVideoIds);
    expect(result).toEqual([
      initialState.videoEntities['3']
    ]);
  });
});
