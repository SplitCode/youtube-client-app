import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CardDataService } from '../../youtube/services/card-data.service';
import {
  getCards,
  getCardsFailed,
  getCardsSuccess,
} from '../actions/card.actions';
import { CardState } from '../state.model';

@Injectable()
export class CardEffects {
  constructor(
    private actions$: Actions,
    private cardDataService: CardDataService,
    private store: Store<CardState>,
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
