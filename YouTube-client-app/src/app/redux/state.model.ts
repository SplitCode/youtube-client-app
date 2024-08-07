import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  cards: CardItemModel[];
  customCards: CustomCardModel[];
  error: string | null;
  nextPageToken?: string;
  currentPage: number;
}

export const initialState: CardState = {
  cards: [],
  customCards: [],
  error: null,
  nextPageToken: '',
  currentPage: 1,
};

// export interface Card {
//   card: CardItemModel | CustomCardModel;
// }

export type CardModel = CustomCardModel | CardItemModel;
