import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FilterComponent } from '../../core/components/header/filters/filter.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardShowService } from './cards-list/services/card-show-service.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsListComponent, CommonModule, FilterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  public isCardsShown: boolean = false;
  public isFiltersShown: boolean = false;
  public isDateSortClick: boolean = false;
  public isViewSortClick: boolean = false;

  public onDateClick(isDate: boolean) {
    this.isDateSortClick = isDate;
  }

  public onViewsClick(isViews: boolean) {
    this.isViewSortClick = isViews;
  }

  constructor(private cardShowService: CardShowService) {}

  ngOnInit(): void {
    this.cardShowService.submitForm$.subscribe((value: boolean) => {
      this.isCardsShown = value;
    });
  }
}
