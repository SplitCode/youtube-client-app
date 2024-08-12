import { CardsListModel } from '../../models/cards-list.model';

export const mockCardsDataResponse: CardsListModel = {
  kind: 'testKind',
  etag: 'testEtag',
  nextPageToken: 'nextPageToken',
  prevPageToken: 'prevPageToken',
  regionCode: 'US',
  pageInfo: { totalResults: 2, resultsPerPage: 2 },
  items: [
    {
      kind: 'youtube#video',
      etag: 'etag1',
      id: { kind: 'youtube#video', videoId: '1' },
      snippet: {
        title: 'Test Video 1',
        publishedAt: '2024-01-01T00:00:00Z',
        channelId: 'channel1',
        description: 'Description of Test Video 1',
        thumbnails: {
          default: {
            url: 'http://example.com/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'http://example.com/medium.jpg',
            width: 320,
            height: 180,
          },
          high: { url: 'http://example.com/high.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Channel 1',
        liveBroadcastContent: 'none',
        publishTime: '2024-01-01T00:00:00Z',
        tags: ['tag1', 'tag2'],
        categoryId: 'category1',
        localized: {
          title: 'Localized Title 1',
          description: 'Localized Description 1',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '1000',
        likeCount: '100',
        favoriteCount: '10',
        commentCount: '20',
      },
    },
    {
      kind: 'youtube#video',
      etag: 'etag2',
      id: { kind: 'youtube#video', videoId: '2' },
      snippet: {
        title: 'Test Video 2',
        publishedAt: '2024-01-02T00:00:00Z',
        channelId: 'channel2',
        description: 'Description of Test Video 2',
        thumbnails: {
          default: {
            url: 'http://example.com/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'http://example.com/medium.jpg',
            width: 320,
            height: 180,
          },
          high: { url: 'http://example.com/high.jpg', width: 480, height: 360 },
        },
        channelTitle: 'Channel 2',
        liveBroadcastContent: 'none',
        publishTime: '2024-01-02T00:00:00Z',
        tags: ['tag3', 'tag4'],
        categoryId: 'category2',
        localized: {
          title: 'Localized Title 2',
          description: 'Localized Description 2',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '2000',
        likeCount: '200',
        favoriteCount: '20',
        commentCount: '40',
      },
    },
  ],
};
