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

  goToNextPage() {
    this.searchService.loadNextPage();
  }

  goToPrevPage() {
    this.searchService.loadPrevPage();
  }
}
