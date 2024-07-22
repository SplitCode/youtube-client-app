import { CommonModule } from '@angular/common';
import {
  Component, inject, OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

import { SearchService } from '../../../core/services/search.service';
import { CardItemModel } from '../../models/card-item.model';
import { FilterWordPipe } from '../../pipes/filter-word.pipe';
import { CardItemComponent } from './card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent, FilterWordPipe],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  private searchService = inject(SearchService);

  filterWord$ = this.searchService.currentFilterWord$;

  cardsList$!: Observable<CardItemModel[]>;

  ngOnInit(): void {
    this.cardsList$ = this.searchService.currentCardList$;
  }
}
