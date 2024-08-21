import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SearchService } from '../../../core/services/search.service';
import { selectFavoriteVideoIds } from '../../../redux/selectors/card.selector';
import { CardModel } from '../../../redux/state.model';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { CustomCardModel } from '../../models/custom-card-item.model';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';
import { CustomCardItemComponent } from './custom-card-item/custom-card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent,
    FilterWordPipe,
    PaginationComponent,
    CustomCardItemComponent,
  ],
  templateUrl: './cards-list-page.component.html',
  styleUrl: './cards-list-page.component.scss',
})
export class CardsListComponent {
  filterWord$ = this.searchService.currentFilterWord$;
  cardsList$: Observable<CardModel[]>;
  favoriteVideoIds$: Observable<string[]>;

  constructor(
    private searchService: SearchService,
    private store: Store,
  ) {
    this.cardsList$ = this.searchService.currentCardList$;
    this.favoriteVideoIds$ = this.store.select(selectFavoriteVideoIds);
  }

  isCustom(card: CardModel): card is CustomCardModel {
    return 'isCustom' in card;
  }
}
