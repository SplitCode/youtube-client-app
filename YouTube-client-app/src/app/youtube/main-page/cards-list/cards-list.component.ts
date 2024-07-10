import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { SearchPipePipe } from '../../../core/pipes/search-pipe.pipe';
import { SearchStateService } from '../../../core/services/search-state.service';
import { CardItemModel } from '../../models/card-item.model';
import { FilterDatePipe } from '../../pipes/filter-date-pipe.pipe';
import { FilterViewsPipe } from '../../pipes/filter-views-pipe.pipe';
import { CardDataService } from '../../services/cardData-service.service';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CommonModule,
    CardItemComponent,
    SearchPipePipe,
    FilterDatePipe,
    FilterViewsPipe,
  ],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  cardsList: CardItemModel[] = [];
  searchQuery: string = '';
  @Input() isDateSortClick: boolean = false;
  @Input() isViewSortClick: boolean = false;

  constructor(
    private cardDataService: CardDataService,
    private searchStateService: SearchStateService,
  ) {}

  ngOnInit(): void {
    this.cardsList = this.cardDataService.getCards();
    this.searchStateService.currentSearchQuery.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }
}
