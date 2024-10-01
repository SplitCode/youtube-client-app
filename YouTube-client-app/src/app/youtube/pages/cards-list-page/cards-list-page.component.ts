import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list-page.component.html',
  styleUrl: './cards-list-page.component.scss',
})
export class CardsListComponent {
  private searchService = inject(SearchService);

  filterWord$ = this.searchService.currentFilterWord$;
  cardsList$ = this.searchService.currentCardList$;
}
