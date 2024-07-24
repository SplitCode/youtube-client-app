export interface CardItemModel {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics?: Statistics;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  tags: string[];
  categoryId: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard: Thumbnail;
  maxres: Thumbnail;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
