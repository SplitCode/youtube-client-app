import { Action, createReducer, on } from '@ngrx/store';

import {
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  sortCardsByDate,
  sortCardsByViews,
  toggleFavorite,
  updateDateSortClick,
  updateFilterWord,
  updateViewSortClick,
} from '../actions/card.actions';
import { CardState, initialState } from '../state.model';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(getCardsSuccess, (state, { cards }): CardState => {
    const newVideoEntities = cards.reduce((entities, card) => ({ ...entities, [card.id.videoId]: card }), {});

    const videoIds = cards.map((card) => card.id.videoId);

    return {
      ...state,
      videoEntities: { ...state.videoEntities, ...newVideoEntities },
      videoIds,
    };
  }),
  on(getCardsFailed, (state, { error }): CardState => ({ ...state, error: error.message })),
  on(createCard, (state, { card }) => ({
    ...state,
    customCards: [card, ...state.customCards],
  })),
  on(deleteCard, (state, { cardId }) => ({
    ...state,
    customCards: state.customCards.filter((card) => card.id !== cardId),
  })),
  on(toggleFavorite, (state, { videoId }) => {
    const isFavorite = state.favoriteVideoIds.includes(videoId);
    const favoriteVideoIds = isFavorite
      ? state.favoriteVideoIds.filter((id) => id !== videoId)
      : [...state.favoriteVideoIds, videoId];

    return {
      ...state,
      favoriteVideoIds,
    };
  }),
  on(updateFilterWord, (state, { word }) => ({
    ...state,
    filterWord: word,
  })),
  on(updateDateSortClick, (state) => ({
    ...state,
    isDateSortAscending: !state.isDateSortAscending,
  })),
  on(updateViewSortClick, (state) => ({
    ...state,
    isViewSortAscending: !state.isViewSortAscending,
  })),
  on(sortCardsByDate, (state) => {
    const cards = [...state.videoIds.map((id) => state.videoEntities[id])];
    cards.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return state.isDateSortAscending ? dateA - dateB : dateB - dateA;
    });
    return {
      ...state,
      videoIds: cards.map((card) => card.id.videoId),
    };
  }),
  on(sortCardsByViews, (state) => {
    const cards = [...state.videoIds.map((id) => state.videoEntities[id])];
    cards.sort((a, b) => {
      const viewsA = 'statistics' in a ? parseInt(a.statistics?.viewCount || '0', 10) : 0;
      const viewsB = 'statistics' in b ? parseInt(b.statistics?.viewCount || '0', 10) : 0;
      return state.isViewSortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    return {
      ...state,
      videoIds: cards.map((card) => card.id.videoId),
    };
  }),
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
