import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardShowService } from './cards-list/services/card-show-service.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsListComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  public isCardsShown: boolean = false;

  constructor(private cardShowService: CardShowService) {}

  ngOnInit(): void {
    this.cardShowService.submitForm$.subscribe((value: boolean) => {
      this.isCardsShown = value;
    });
  }
}
