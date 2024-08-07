import { Action, createReducer, on } from '@ngrx/store';
import { CardState, initialState } from '../state.model';
import {
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  setCurrentPage,
} from '../actions/card.actions';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(
    getCardsSuccess,
    (state, { cards }): CardState => ({
      // console.log('Reducer state:', state, 'New cards:', cards);
      ...state,
      cards: [...state.cards, ...cards],
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
  on(setCurrentPage, (state, { page }) => ({
    ...state,
    currentPage: page,
  })),
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
