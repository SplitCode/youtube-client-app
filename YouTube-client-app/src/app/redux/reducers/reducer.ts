import { Action, createReducer, on } from '@ngrx/store';
import { CardState, initialState } from '../state.model';
import {
  // addToFavorite,
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  // removeFromFavorite,
  setCurrentPage,
  toggleFavorite,
} from '../actions/card.actions';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(
    getCardsSuccess,
    (state, { cards }): CardState => ({
      ...state,
      // cards: [...state.cards, ...cards],
      cards: cards,
    }),
  ),
  on(getCardsFailed, (state, { error }): CardState => {
    console.error('Reducer error:', error);
    return { ...state, error: error.message };
  }),
  on(createCard, (state, { card }) => ({
    ...state,
    customCards: [card, ...state.customCards],
  })),
  on(deleteCard, (state, { cardId }) => ({
    ...state,
    customCards: state.customCards.filter((card) => card.id !== cardId),
  })),
  on(toggleFavorite, (state, { videoId }) => ({
    ...state,
    favoriteVideoIds: state.favoriteVideoIds.includes(videoId)
      ? state.favoriteVideoIds.filter((id) => id !== videoId)
      : [...state.favoriteVideoIds, videoId],
  })),
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
