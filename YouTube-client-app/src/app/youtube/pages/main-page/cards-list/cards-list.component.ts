import { CommonModule } from '@angular/common';
import {
  Component, inject, Input, OnInit
} from '@angular/core';

import { SearchPipe } from '../../../../core/pipes/search.pipe';
import { SearchStateService } from '../../../../core/services/search-state.service';
import { CardItemModel } from '../../../models/card-item.model';
import { FilterDatePipe } from '../../../pipes/filter-date.pipe';
import { FilterViewsPipe } from '../../../pipes/filter-views.pipe';
import { FilterWordPipe } from '../../../pipes/filter-word.pipe';
import { CardDataService } from '../../../services/card-data.service';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent,
    FilterDatePipe,
    FilterViewsPipe,
    FilterWordPipe,
    SearchPipe,
  ],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  cardsList: CardItemModel[] = [];
  searchQuery: string = '';
  @Input() isDateSortClick: boolean = false;
  @Input() isViewSortClick: boolean = false;
  @Input() filterWord: string = '';

  private cardDataService = inject(CardDataService);
  private searchStateService = inject(SearchStateService);

  ngOnInit(): void {
    this.cardsList = this.cardDataService.getCards();
    this.searchStateService.currentSearchQuery.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }
}
