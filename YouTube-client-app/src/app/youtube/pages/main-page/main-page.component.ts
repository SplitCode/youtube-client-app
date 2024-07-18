import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { CardShowService } from '../../services/card-show.service';
import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsListComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private cardShowService = inject(CardShowService);
  private searchService = inject(SearchService);

  public isCardsShown: boolean = false;
  public filterWord: string = '';

  ngOnInit(): void {
    this.cardShowService.submitForm$.subscribe((value: boolean) => {
      this.isCardsShown = value;
    });

    this.searchService.currentFilterWord.subscribe((word: string) => {
      this.filterWord = word;
    });
  }
}
