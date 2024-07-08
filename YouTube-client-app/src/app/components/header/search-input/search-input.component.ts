import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
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
