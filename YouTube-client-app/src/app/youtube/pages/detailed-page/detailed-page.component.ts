import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchService } from '../../../core/services/search.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CardStatsComponent } from '../../components/card-statistic/card-stats.component';
import { CardColorDirective } from '../../directives/card-color.directive';
import { CardItemModel } from '../../models/card-item.model';
// import { CardDataService } from '../../services/card-data.service';

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
export class DetailedPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private searchService = inject(SearchService);
  // cardDataService = inject(CardDataService);
  cardItem$!: Observable<CardItemModel>;

  ngOnInit() {
    const cardItemId = this.route.snapshot.params['id'];
    this.cardItem$ = this.searchService.getCardById(cardItemId);
  }
}
