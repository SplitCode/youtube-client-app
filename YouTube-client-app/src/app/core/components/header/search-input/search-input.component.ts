import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../../shared/button/button.component';
import { CardShowService } from '../../../../youtube/services/card-show-service.service';
import { SearchStateService } from '../../../services/search-state.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  private isSubmitForm: boolean = false;

  searchQuery: string = '';

  constructor(
    private searchStateService: SearchStateService,
    private cardShowService: CardShowService,
  ) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.searchStateService.updateSearchQuery(this.searchQuery);
  }

  showCards(event: Event): void {
    event.preventDefault();
    this.cardShowService.showCards(true);
  }
}
