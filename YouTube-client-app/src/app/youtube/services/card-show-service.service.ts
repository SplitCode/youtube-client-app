import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardShowService {
  public submitForm$ = new Subject<boolean>();

  public showCards(event: boolean): void {
    this.submitForm$.next(event);
  }
}
