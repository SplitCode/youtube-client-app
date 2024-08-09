import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
} from 'rxjs';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SearchService } from '../../../services/search.service';
import { AuthService } from '../../../../auth/services/auth.service';

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

  isAuthenticated$: Observable<boolean>;
  isAuthenticated: boolean = false;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.isAuthenticated$ = this.authService.isAuthenticated$; // Ensure initialization here
  }

  ngOnInit(): void {
    this.isAuthenticated$.subscribe((authStatus) => {
      this.isAuthenticated = authStatus;
    });

    this.searchSubject
      .pipe(
        filter((query) => query.length >= 3 || query.trim() === ''),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((query) => {
        if (this.isAuthenticated) {
          this.searchService.searchCards(query);
        }
      });
  }

  onSearchChange(query: string): void {
    this.searchSubject.next(query);
    this.router.navigate(['/main']);
  }

  get isSearchInputDisabled(): boolean {
    return !this.isAuthenticated;
  }
}
