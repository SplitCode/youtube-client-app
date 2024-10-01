import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CardStatsComponent } from '../../components/card-statistic/card-stats.component';
import { CardColorDirective } from '../../directives/card-color.directive';
import { CardItemModel } from '../../models/card-item.model';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardStatsComponent,
    CardColorDirective,
    RouterModule,
  ],
  templateUrl: './detailed-page.component.html',
  styleUrl: './detailed-page.component.scss',
})
export class DetailedPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cardDataService = inject(CardDataService);
  cardItem: CardItemModel;

  constructor() {
    const cardItemId = this.route.snapshot.params['id'];
    this.cardItem = this.cardDataService.getCardById(cardItemId);
  }
}
