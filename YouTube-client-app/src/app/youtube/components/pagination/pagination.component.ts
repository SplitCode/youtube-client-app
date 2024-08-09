import { Component, Input } from '@angular/core';
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
  @Input() query!: string;
  @Input() nextPageToken?: string;
  @Input() prevPageToken?: string;

  constructor(private searchService: SearchService) {}

  goToNextPage() {
    console.log('next query', this.query);
    if (this.nextPageToken) {
      console.log(this.nextPageToken);
      this.searchService.searchNextPage(this.query, this.nextPageToken);
      // this.searchService.searchNextPage(this.nextPageToken);
    }
    console.log('next');
  }

  goToPrevPage() {
    console.log('prev query', this.query);
    if (this.prevPageToken) {
      console.log(this.prevPageToken);
      this.searchService.searchPrevPage(this.query, this.prevPageToken);
      // this.searchService.searchPrevPage(this.prevPageToken);
    }
    console.log('prev');
  }
}
