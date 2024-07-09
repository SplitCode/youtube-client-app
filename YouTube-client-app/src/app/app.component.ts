import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardItemComponent } from './components/cards-list/card-item/card-item.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FilterComponent } from './components/header/filters/filter.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FilterComponent,
    CardItemComponent,
    CardsListComponent,
  ],
})
export class AppComponent {
  title = 'YouTube-client-app';
}
