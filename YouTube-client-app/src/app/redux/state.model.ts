import { CardItemModel } from '../youtube/models/card-item.model';
import { CustomCardModel } from '../youtube/models/custom-card-item.model';

export interface CardState {
  videoEntities: { [id: string]: CardItemModel };
  customCards: CustomCardModel[];
  videoIds: string[];
  favoriteVideoIds: string[];
  error: string | null;
  filterWord: string;
  isDateSortAscending: boolean;
  isViewSortAscending: boolean;
}

export const initialState: CardState = {
  videoEntities: {},
  customCards: [],
  videoIds: [],
  favoriteVideoIds: [],
  error: null,
  filterWord: '',
  isDateSortAscending: true,
  isViewSortAscending: true,
};

export type CardModel = CustomCardModel | CardItemModel;
