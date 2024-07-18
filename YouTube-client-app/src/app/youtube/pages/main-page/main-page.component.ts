import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FilterComponent } from '../../../core/components/header/filters/filter.component';
import { SearchService } from '../../../core/services/search.service';
import { CardShowService } from '../../services/card-show.service';
// import { FilterToggleService } from '../../services/filter-toggle.service';
import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsListComponent, CommonModule, FilterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private cardShowService = inject(CardShowService);
  // private filterToggleService = inject(FilterToggleService);
  private searchService = inject(SearchService);

  public isCardsShown: boolean = false;
  public isFiltersShown: boolean = false;
  public isDateSortClick: boolean = false;
  public isViewSortClick: boolean = false;
  public filterWord: string = '';

  public onDateClick(isDate: boolean) {
    this.isDateSortClick = isDate;
  }

  public onViewsClick(isViews: boolean) {
    this.isViewSortClick = isViews;
  }

  public onWordFilterChange(word: string) {
    this.filterWord = word;
  }

  ngOnInit(): void {
    this.cardShowService.submitForm$.subscribe((value: boolean) => {
      this.isCardsShown = value;
    });

    // this.filterToggleService.currentFilterShow.subscribe((isShow: boolean) => {
    //   this.isFiltersShown = isShow;
    // });

    this.searchService.currentFilterWord.subscribe((word: string) => {
      this.filterWord = word;
    });
  }
}
