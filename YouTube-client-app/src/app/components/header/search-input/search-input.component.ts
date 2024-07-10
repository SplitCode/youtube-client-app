import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { SearchStateService } from '../services/search-state.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  searchQuery: string = '';

  constructor(private searchStateService: SearchStateService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.searchStateService.updateSearchQuery(this.searchQuery);
  }
}
