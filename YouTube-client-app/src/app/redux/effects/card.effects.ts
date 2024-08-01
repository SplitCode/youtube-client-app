import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { CardDataService } from '../../youtube/services/card-data.service';
import {
  getCards,
  getCardsFailed,
  getCardsSuccess,
} from '../actions/card.actions';

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private cardDataService: CardDataService
  ) {}


loadCards$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(getCards),
    switchMap((action) =>
      this.cardDataService.getCardsDataWithStatistics(action.query).pipe(
        map(cards => {
          console.log('Cards loaded:', cards);
          return getCardsSuccess({
            cards,
            nextPageToken: ''
          });
        }),
        catchError(error => {
          console.error('Error loading cards:', error);
          return of(getCardsFailed({ error }))
        })
      )
    )
  );
});
}
