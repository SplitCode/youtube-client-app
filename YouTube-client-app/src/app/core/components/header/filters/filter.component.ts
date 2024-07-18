import {
  Component, EventEmitter, inject, Output
} from '@angular/core';

import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  searchService = inject(SearchService);
  @Output() wordFilterChange: EventEmitter<string> = new EventEmitter();

  isDateSort: boolean = false;
  isViewSort: boolean = false;

  onDateClick() {
    this.isDateSort = !this.isDateSort;
    this.searchService.updateDateSortClick(this.isDateSort);
  }

  onViewsClick() {
    this.isViewSort = !this.isViewSort;
    this.searchService.updateViewSortClick(this.isViewSort);
  }

  onFilterWordChange(event: Event) {
    const filterWord = (event.target as HTMLInputElement).value;
    this.wordFilterChange.emit(filterWord);
  }

  preventSubmit(event: Event) {
    event.preventDefault();
  }
}
