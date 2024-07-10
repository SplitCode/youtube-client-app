import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SearchPipePipe } from '../../../components/header/pipes/search-pipe.pipe';
import { SearchStateService } from '../../../components/header/services/search-state.service';
import { CardItemComponent } from './card-item/card-item.component';
import { CardItemModel } from './models/card-item.model';
import { CardDataService } from './services/cardData-service.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, SearchPipePipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  cardsList: CardItemModel[] = [];
  searchQuery: string = '';

  // cardService: CardService = inject(CardService);

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
