import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FilterComponent } from './components/header/filters/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FilterComponent,
    SearchResultsComponent,
    SearchItemComponent,
  ],
})
export class AppComponent {
  title = 'YouTube-client-app';
}
