import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  cards: CardItemModel[];
  customCards: CustomCardModel[];
  favoriteVideoIds: string[];
  error: string | null;
  nextPageToken?: string;
}

export const initialState: CardState = {
  cards: [],
  customCards: [],
  favoriteVideoIds: [],
  error: null,
  nextPageToken: '',
};

export type CardModel = CustomCardModel | CardItemModel;

export interface CardsResponse {
  cards: CardItemModel[];
  nextPageToken: string;
}
