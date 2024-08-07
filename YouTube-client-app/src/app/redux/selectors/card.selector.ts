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

export const selectCurrentPage = createSelector(
  selectCardState,
  (state: CardState) => state.currentPage,
);

export const selectFavoriteVideoIds = createSelector(
  selectCardState,
  (state: CardState) => state.favoriteVideoIds,
);

export const selectFavoriteVideos = createSelector(
  selectCards,
  selectFavoriteVideoIds,
  (cards, favoriteVideoIds) =>
    cards.filter((card) => favoriteVideoIds.includes(card.id.videoId)),
);
