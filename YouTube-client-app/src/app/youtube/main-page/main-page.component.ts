import { Component } from '@angular/core';

import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardsListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
