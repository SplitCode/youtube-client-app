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

  onDateClick() {
    this.searchService.updateDateSortClick();
  }

  onViewsClick() {
    this.searchService.updateViewSortClick();
  }

  onFilterWordChange(event: Event) {
    const filterWord = (event.target as HTMLInputElement).value;
    this.searchService.updateFilterWord(filterWord);
    this.wordFilterChange.emit(filterWord);
  }

  preventSubmit(event: Event) {
    event.preventDefault();
  }
}
