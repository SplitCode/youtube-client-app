import { CommonModule } from '@angular/common';
import {
  Component, DestroyRef, inject, OnInit
} from '@angular/core';
// import { Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

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
  private destroyRef = inject(DestroyRef);

  public isCardsShown$: Observable<boolean>;
  public filterWord$: Observable<string>;

  constructor() {
    this.isCardsShown$ = this.cardShowService.submitForm$;
    this.filterWord$ = this.searchService.currentFilterWord$;
  }

  ngOnInit(): void {
    this.isCardsShown$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();

    this.filterWord$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
