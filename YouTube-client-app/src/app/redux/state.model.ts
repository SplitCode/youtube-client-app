import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  cards: CardItemModel[];
  customCards: CustomCardModel[];
  favoriteVideoIds: string[];
  error: string | null;
  nextPageToken?: string;
  currentPage: number;
}

export const initialState: CardState = {
  cards: [],
  customCards: [],
  favoriteVideoIds: [],
  error: null,
  nextPageToken: '',
  currentPage: 1,
};

// export interface Card {
//   card: CardItemModel | CustomCardModel;
// }

export type CardModel = CustomCardModel | CardItemModel;
