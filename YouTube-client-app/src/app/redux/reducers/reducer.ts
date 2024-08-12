import { Action, createReducer, on } from '@ngrx/store';

import {
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  toggleFavorite,
} from '../actions/card.actions';
import { CardState, initialState } from '../state.model';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(getCardsSuccess, (state, { cards }): CardState => {
    const newVideoEntities = cards.reduce(
      (entities, card) => ({ ...entities, [card.id.videoId]: card }),
      {},
    );

    const videoIds = cards.map((card) => card.id.videoId);

    return {
      ...state,
      videoEntities: { ...state.videoEntities, ...newVideoEntities },
      videoIds,
    };
  }),
  on(
    getCardsFailed,
    (state, { error }): CardState => ({ ...state, error: error.message }),
  ),
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
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
