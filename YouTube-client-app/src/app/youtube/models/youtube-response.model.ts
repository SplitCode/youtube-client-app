import { Statistics } from './card-item.model';

export interface YouTubeVideoStatisticsResponse {
  items: VideoStatisticsModel[];
}

export interface VideoStatisticsModel {
  id: string;
  statistics: Statistics;
}
