import { CardItemModel, Statistics } from './card-item.model';

export interface YouTubeResponse {
  items: CardItemModel[];
}

export interface YouTubeVideoStatisticsResponse {
  items: VideoStatisticsModel[];
}

export interface VideoStatisticsModel {
  id: string;
  statistics: Statistics;
}
