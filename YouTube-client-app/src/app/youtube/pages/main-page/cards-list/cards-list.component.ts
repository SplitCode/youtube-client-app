import { CommonModule } from '@angular/common';
import {
  Component, inject, Input, OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { SearchService } from '../../../../core/services/search.service';
import { CardItemModel } from '../../../models/card-item.model';
import { FilterWordPipe } from '../../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit, OnDestroy {
  private searchService = inject(SearchService);
  private destroy$ = new Subject<void>();

  cardsList: CardItemModel[] = [];

  @Input() filterWord: string = '';

  ngOnInit(): void {
    this.searchService.currentCardList$.pipe(takeUntil(this.destroy$)).subscribe((cards) => {
      this.cardsList = cards;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
