import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CardStatisticComponent } from '../../components/card-statistic/card-statistic.component';
import { CardItemModel } from '../../models/card-item.model';
import { CardDataService } from '../../services/card-data.service';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardStatisticComponent],
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
