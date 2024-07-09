import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CardItemComponent } from './card-item/card-item.component';
import { CardItemModel } from './models/card-item.model';
import { CardService } from './services/card-service.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  cardsList: CardItemModel[] = [];
  cardService: CardService = inject(CardService);

  constructor() {
    this.cardsList = this.cardService.getCards();
  }
}
