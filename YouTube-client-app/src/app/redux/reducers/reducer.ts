import { Action, createReducer, on } from '@ngrx/store';
import { CardState, initialState } from '../state.model';
import {
  createCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
} from '../actions/card.actions';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(getCardsSuccess, (state, { cards }): CardState => {
    console.log('Reducer state:', state, 'New cards:', cards);
    return { ...state, cards };
  }),
  on(getCardsFailed, (state, { error }): CardState => {
    console.error('Reducer error:', error);
    return { ...state, error: error.message };
  }),
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
