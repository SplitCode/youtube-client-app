import { Component, EventEmitter, Output } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  query: string = '';
  @Output() search = new EventEmitter<string>();

  onSubmit() {
    this.search.emit(this.query);
  }
}
