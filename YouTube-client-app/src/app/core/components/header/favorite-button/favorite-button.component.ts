import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.scss',
})
export class FavoriteButtonComponent {}
