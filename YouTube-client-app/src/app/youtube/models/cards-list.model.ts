import { CardItemModel } from './card-item.model';

export interface CardsListModel {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: CardItemModel[];
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

// export interface CardsListResponse {
//   kind: string;
//   etag: string;
//   totalResults: number;
//   resultsPerPage: number;
//   items: CardItemModel[];
// }