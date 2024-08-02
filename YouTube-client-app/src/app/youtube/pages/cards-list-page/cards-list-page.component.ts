import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';
import { Observable, switchMap, tap } from 'rxjs';
import { CardItemModel } from '../../models/card-item.model';
import { Store } from '@ngrx/store';
import { getCards } from '../../../redux/actions/card.actions';
import { CardState } from '../../../redux/reducers/reducer';
import { selectCards } from '../../../redux/selectors/card.selector';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list-page.component.html',
  styleUrl: './cards-list-page.component.scss',
})

  export class CardsListComponent {
    filterWord$ = this.searchService.currentFilterWord$;
    cardsList$: Observable<CardItemModel[]>;

  constructor(private searchService: SearchService, private store: Store<CardState>) {
    // cardsList$ = this.searchService.currentCardList$;
    this.cardsList$ = this.store.select(selectCards);
  }
 }
