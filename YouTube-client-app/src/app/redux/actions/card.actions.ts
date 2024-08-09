import { createAction, props } from '@ngrx/store';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';
import { CardModel } from '../state.model';

export const getCards = createAction(
  '[Cards API] Get All Cards',
  props<{ query: string }>(),
);

// export const getCardsSuccess = createAction(
//   '[Cards API] Get Cards Success',
//   props<{ cards: CardItemModel[] }>(),
// );

export const getCardsSuccess = createAction(
  '[Cards API] Get Cards Success',
  props<{
    cards: CardItemModel[];
    nextPageToken?: string;
    prevPageToken?: string;
  }>(),
);

export const getCardsFailed = createAction(
  '[Cards API] Get Cards Failure',
  props<{ error: Error }>(),
);

export const createCard = createAction(
  '[Admin Page] Create Custom Card',
  props<{ card: CustomCardModel }>(),
);

export const deleteCard = createAction(
  '[Admin Page] Delete Custom Card',
  props<{ cardId: string }>(),
);

export const toggleFavorite = createAction(
  '[Card] Toggle Favorite',
  props<{ videoId: string }>(),
);

export const switchPage = createAction(
  '[Cards API] Switch Page',
  props<{ pageToken: string }>(),
);

export const switchPageSuccess = createAction(
  '[Cards API] Switch Page Success',
  props<{
    cards: CardModel[];
    nextPageToken?: string;
    prevPageToken?: string;
  }>(),
);

export const switchPageFailed = createAction(
  '[Cards API] Switch Page Failed',
  props<{ error: any }>(),
);
