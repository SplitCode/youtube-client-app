import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Output() dateSortClick: EventEmitter<boolean> = new EventEmitter();
  @Output() viewSortClick: EventEmitter<boolean> = new EventEmitter();
  @Output() wordFilterChange: EventEmitter<string> = new EventEmitter();

  public isDateSortClick: boolean = false;
  public isViewSortClick: boolean = false;

  onSortByDate() {
    this.isDateSortClick = !this.isDateSortClick;
    this.dateSortClick.emit(this.isDateSortClick);
  }

  onSortByViews() {
    this.isViewSortClick = !this.isViewSortClick;
    this.viewSortClick.emit(this.isViewSortClick);
  }

  onFilterWordChange(event: Event) {
    const filterWord = (event.target as HTMLInputElement).value;
    this.wordFilterChange.emit(filterWord);
  }

  preventSubmit(event: Event) {
    event.preventDefault();
  }
}
