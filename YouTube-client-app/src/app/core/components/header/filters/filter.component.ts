import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  searchService = inject(SearchService);
  filterControl = new FormControl('');

  constructor() {
    this.filterControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value: string | null) => {
        if (value !== null) {
          this.searchService.updateFilterWord(value);
        }
      });
  }

  onDateClick() {
    this.searchService.updateDateSortClick();
  }

  onViewsClick() {
    this.searchService.updateViewSortClick();
  }
}
