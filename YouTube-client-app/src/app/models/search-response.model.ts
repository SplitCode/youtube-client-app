import { SearchItemModel } from './search-item.model';

export interface SearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItemModel[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
