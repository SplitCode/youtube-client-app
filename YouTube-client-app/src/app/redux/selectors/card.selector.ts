import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CardState } from '../state.model';

const selectCardState = createFeatureSelector<CardState>('cardState');

export const selectCustomCards = createSelector(
  selectCardState,
  (state: CardState) => state.customCards,
);

export const selectVideoEntities = createSelector(
  selectCardState,
  (state: CardState) => state.videoEntities,
);

export const selectVideoIds = createSelector(
  selectCardState,
  (state: CardState) => state.videoIds,
);

export const selectCards = createSelector(
  selectVideoEntities,
  selectVideoIds,
  (videoEntities, videoIds) => videoIds.map((id) => videoEntities[id]),
);

export const selectCombinedCards = createSelector(
  selectCustomCards,
  selectCards,
  (customCards, cards) => [...customCards, ...cards],
);

export const selectFavoriteVideoIds = createSelector(
  selectCardState,
  (state: CardState) => state.favoriteVideoIds,
);

export const selectFavoriteCards = createSelector(
  selectVideoEntities,
  selectFavoriteVideoIds,
  (videoEntities, favoriteVideoIds) => favoriteVideoIds.map((id) => videoEntities[id]),
);

export const selectFilterWord = createSelector(
  selectCardState,
  (state: CardState) => state.filterWord
);

export const selectIsDateSortAscending = createSelector(
  selectCardState,
  (state: CardState) => state.isDateSortAscending
);

export const selectIsViewSortAscending = createSelector(
  selectCardState,
  (state: CardState) => state.isViewSortAscending
);
