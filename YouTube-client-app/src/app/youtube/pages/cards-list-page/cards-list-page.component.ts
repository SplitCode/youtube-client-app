import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';
import { Observable } from 'rxjs';
import { CardItemModel, CardModel } from '../../models/card-item.model';
import { selectCombinedCards } from '../../../redux/selectors/card.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list-page.component.html',
  styleUrl: './cards-list-page.component.scss',
})
export class CardsListComponent {
  // public combinedCards$: Observable<CardModel[]>;
  filterWord$ = this.searchService.currentFilterWord$;
  cardsList$: Observable<CardItemModel[]>;

  constructor(
    private searchService: SearchService,
    private store: Store,
  ) {
    this.cardsList$ = this.searchService.currentCardList$;
    // this.combinedCards$ = this.store.select(selectCombinedCards);
  }
}
