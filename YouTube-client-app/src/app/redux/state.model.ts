import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  videoEntities: { [id: string]: CardItemModel };
  customCards: CustomCardModel[];
  videoIds: string[];
  favoriteVideoIds: string[];
  error: string | null;
}

export const initialState: CardState = {
  videoEntities: {},
  customCards: [],
  videoIds: [],
  favoriteVideoIds: [],
  error: null,
};

export type CardModel = CustomCardModel | CardItemModel;
