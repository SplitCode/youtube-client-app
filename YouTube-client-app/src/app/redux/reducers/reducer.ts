import { Action, createReducer, on } from '@ngrx/store';

import { CardItemModel } from '../../youtube/models/card-item.model';
import { CustomCardModel } from '../../youtube/models/custom-card-item.model';
import {
  createCard, getCards, getCardsFailed, getCardsSuccess,
} from '../actions/card.actions';

export interface CardState {
  cards: CardItemModel[];
  customCards: CustomCardModel[];
  error: string | null;
  nextPageToken?: string;
}

export const initialState: CardState = {
  cards: [],
  customCards: [],
  error: null,
  nextPageToken: '',
};

const reducer = createReducer(
  initialState,
  on(getCardsSuccess, (state, { cards }): CardState => {
    console.log('Reducer state:', state, 'New cards:', cards);
    return { ...state, cards };
  }),
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(getCardsSuccess, (state, { cards }): CardState => ({ ...state, cards })),
  on(getCardsFailed, (state, { error }): CardState => {
    console.error('Reducer error:', error);
    return { ...state, error: error.message }
  })
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}