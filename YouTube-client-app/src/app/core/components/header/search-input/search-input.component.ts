import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardShowService } from '../../../../youtube/services/card-show.service';
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

  onSubmit(event: boolean): void {
    this.isSubmitForm = event as boolean;
    this.searchStateService.updateSearchQuery(this.searchQuery);
    this.cardShowService.showCards(this.isSubmitForm);
  }

  isSearchDisabled(): boolean {
    return this.searchQuery.trim().length === 0;
  }
}
