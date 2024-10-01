import { Component, inject } from '@angular/core';

import { SearchService } from '../../../core/services/search.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  searchService = inject(SearchService);

  currentPage: number = 1;

  goToNextPage() {
    this.searchService.loadNextPage().subscribe((success) => {
      if (success) {
        this.currentPage += 1;
      }
    });
  }

  goToPrevPage() {
    if (this.currentPage > 1) {
      this.searchService.loadPrevPage().subscribe((success) => {
        if (success) {
          this.currentPage -= 1;
        }
      });
    }
  }
}
