import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SearchService } from '../../../core/services/search.service';

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
        this.currentPage++;
      }
    });
  }

  goToPrevPage() {
    if (this.currentPage > 1) {
      this.searchService.loadPrevPage().subscribe((success) => {
        if (success) {
          this.currentPage--;
        }
      });
    }
  }
}
