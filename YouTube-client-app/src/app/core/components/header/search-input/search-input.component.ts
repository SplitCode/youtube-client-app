import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardShowService } from '../../../../youtube/services/card-show.service';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  // private isSubmitForm: boolean = false;
  searchQuery: string = '';

  searchService = inject(SearchService);
  cardShowService = inject(CardShowService);

  // onSubmit(event: boolean): void {
  //   this.isSubmitForm = event;
  //   this.searchService.updateSearchQuery(this.searchQuery);
  //   this.cardShowService.showCards(this.isSubmitForm);
  // }

  onSubmit(): void {
    this.searchService.updateSearchQuery(this.searchQuery);
    this.cardShowService.showCards(true);
  }
}
