import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  debounceTime, distinctUntilChanged, filter, Subject
} from 'rxjs';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent implements OnInit {
  searchQuery: string = '';
  searchSubject = new Subject<string>();

  searchService = inject(SearchService);
  private router = inject(Router);

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        filter((query) => query.length >= 3 || query.trim() === ''),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((query) => {
        this.searchService.searchCards(query);
      });
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
    this.router.navigate(['/main']);
  }
}
