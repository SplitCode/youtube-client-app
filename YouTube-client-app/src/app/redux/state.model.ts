import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  cards: CardItemModel[];
  customCards: CustomCardModel[];
  favoriteCards: CardItemModel[];
  favoriteVideoIds: string[];
  error: string | null;
  nextPageToken?: string;
  prevPageToken?: string;
}

export const initialState: CardState = {
  cards: [],
  customCards: [],
  favoriteCards: [],
  favoriteVideoIds: [],
  error: null,
  nextPageToken: '',
  prevPageToken: '',
};

export type CardModel = CustomCardModel | CardItemModel;

export interface CardsResponse {
  cards: CardItemModel[];
  nextPageToken: string;
}
