import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CardState } from '../state.model';

const selectCardState = createFeatureSelector<CardState>('cardState');

export const selectCards = createSelector(
  selectCardState,
  (state: CardState) => state.cards,
);

export const selectCustomCards = createSelector(
  selectCardState,
  (state: CardState) => state.customCards,
);

export const selectCombinedCards = createSelector(
  selectCardState,
  (state: CardState) => [...state.customCards, ...state.cards],
);

export const selectFavoriteVideoIds = createSelector(
  selectCardState,
  (state: CardState) => state.favoriteVideoIds,
);

export const selectFavoriteCards = createSelector(
  selectCardState,
  (state: CardState) => state.favoriteCards,
);
