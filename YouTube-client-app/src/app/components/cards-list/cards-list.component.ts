import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CardService } from '../../card-service.service';
import { CardItemComponent } from './card-item/card-item.component';
import { CardItemModel } from './models/card-item.model';

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
    this.cardsList = this.cardService.getAllCards();
  }
}
