import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';
import { CardState } from '../reducers/reducer';

const selectCardState = createFeatureSelector<CardState>('cardState');

export const selectCards = createSelector(
  selectCardState,
  (state: CardState) => state.cards,
);

export const selectCustomCards = createSelector(
  selectCardState,
  (state: CardState) => state.customCards
);
