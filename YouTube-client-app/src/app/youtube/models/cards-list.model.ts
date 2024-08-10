import { CardItemModel } from './card-item.model';

export interface CardsListModel {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: CardItemModel[];
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
