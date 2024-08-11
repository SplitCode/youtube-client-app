import { Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

// import { CardItemModel } from '../../youtube/models/card-item.model';
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
    switchMap((action) => {
      const cardsSignal = this.cardDataService.getCardsDataWithStatistics(action.query);
      const cards$ = toObservable(cardsSignal);

      return cards$.pipe(
        map((cards) => getCardsSuccess({ cards })),
        catchError((error) => of(getCardsFailed({ error })))
      );
    }),
  ));
}
