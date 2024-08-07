import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() currentPage: number = 1; // Текущая страница
  @Output() pageChange = new EventEmitter<number>(); // Событие для смены страницы

  // Метод для переключения на предыдущую страницу
  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  // Метод для переключения на следующую страницу
  nextPage() {
    this.pageChange.emit(this.currentPage + 1);
  }

  // Метод для переключения на конкретную страницу
  goToPage(page: number) {
    this.pageChange.emit(page);
  }
}
