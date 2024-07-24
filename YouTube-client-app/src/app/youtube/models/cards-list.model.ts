import { PageInfo, VideoItemModel } from './card-item.model';

export interface CardsListModel {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: PageInfo;
  // items: CardItemModel[];
  items: VideoItemModel[];
}
