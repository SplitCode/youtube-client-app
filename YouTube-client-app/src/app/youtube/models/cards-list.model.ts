import { CardItemModel } from './card-item.model';

export interface CardsListResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: CardItemModel[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
