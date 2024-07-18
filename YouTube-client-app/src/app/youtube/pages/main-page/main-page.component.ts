import { CommonModule } from '@angular/common';
import {
  Component, inject, OnDestroy, OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

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
export class MainPageComponent implements OnInit, OnDestroy {
  private cardShowService = inject(CardShowService);
  private searchService = inject(SearchService);
  private destroy$ = new Subject<void>();

  public isCardsShown: boolean = false;
  public filterWord: string = '';

  ngOnInit(): void {
    this.cardShowService.submitForm$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: boolean) => {
        this.isCardsShown = value;
      });

    this.searchService.currentFilterWord
      .pipe(takeUntil(this.destroy$))
      .subscribe((word: string) => {
        this.filterWord = word;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
