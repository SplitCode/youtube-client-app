import { createAction, props } from '@ngrx/store';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';

export interface CardsResponse {
  cards: CardItemModel[];
  nextPageToken: string;
}

export const createCard = createAction(
  '[Admin Page] Create Custom Card',
  props<{ card: CustomCardModel }>(),
);

export const getCards = createAction(
  '[Cards API] Get All Cards',
  props<{ query: string }>(),
);

export const getCardsSuccess = createAction(
  '[Cards API] Get Cards Success',
  props<CardsResponse>(),
);

export const getCardsFailed = createAction(
  '[Cards API] Get Cards Failure',
  props<{ error: Error }>(),
);
