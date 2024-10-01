import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  searchService = inject(SearchService);
  filterControl = new FormControl('');

  ngOnInit() {
    this.filterControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => {
          if (value !== null) {
            this.searchService.updateFilterWord(value);
          }
        }),
      )
      .subscribe();
  }

  onDateClick() {
    this.searchService.updateDateSortClick();
  }

  onViewsClick() {
    this.searchService.updateViewSortClick();
  }
}
