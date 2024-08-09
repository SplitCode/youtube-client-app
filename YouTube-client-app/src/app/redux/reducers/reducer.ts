import { Action, createReducer, on } from '@ngrx/store';
import { CardState, initialState } from '../state.model';
import {
  createCard,
  deleteCard,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  toggleFavorite,
} from '../actions/card.actions';

const reducer = createReducer(
  initialState,
  on(getCards, (state): CardState => ({ ...state, error: null })),
  on(
    getCardsSuccess,
    (state, { cards, nextPageToken, prevPageToken }): CardState => ({
      ...state,
      cards,
      nextPageToken,
      prevPageToken,
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
  on(toggleFavorite, (state, { videoId }) => {
    console.log('toggleFavorite reducer called with videoId:', videoId);
    const isFavorite = state.favoriteVideoIds.includes(videoId);
    const favoriteVideoIds = isFavorite
      ? state.favoriteVideoIds.filter((id) => id !== videoId)
      : [...state.favoriteVideoIds, videoId];

    const updatedFavoriteCards = isFavorite
      ? state.favoriteCards.filter((card) => card.id.videoId !== videoId)
      : [
          ...state.favoriteCards,
          ...state.cards.filter((card) => card.id.videoId === videoId),
        ];

    console.log('Updated favoriteVideoIds:', favoriteVideoIds);
    console.log('Updated favoriteCards:', updatedFavoriteCards);

    return {
      ...state,
      favoriteVideoIds,
      favoriteCards: updatedFavoriteCards,
    };
  }),
);

export function cardsReducer(state: CardState | undefined, action: Action) {
  return reducer(state, action);
}
