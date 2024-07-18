import { CommonModule } from '@angular/common';
import {
  Component, inject, Input, OnInit
} from '@angular/core';

import { SearchService } from '../../../../core/services/search.service';
import { CardItemModel } from '../../../models/card-item.model';
import { FilterWordPipe } from '../../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  cardsList: CardItemModel[] = [];
  searchQuery: string = '';

  @Input() filterWord: string = '';

  private searchService = inject(SearchService);

  ngOnInit(): void {
    this.searchService.currentCardList.subscribe((cards) => {
      this.cardsList = cards;
    });

    this.searchService.currentSearchQuery.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }
}
