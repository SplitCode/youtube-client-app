import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
    private cardDataService: CardDataService,
  ) {}

  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(getCards),
    switchMap((action) => this.cardDataService.getCardsDataWithStatistics(action.query).pipe(
      map((cards) => getCardsSuccess({
        cards,
      })),
      catchError((error) => of(getCardsFailed({ error }))),
    ),),
  ));
}
