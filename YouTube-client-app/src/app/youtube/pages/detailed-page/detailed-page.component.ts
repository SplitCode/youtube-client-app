import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { toggleFavorite } from '../../../redux/actions/card.actions';
import { selectFavoriteVideoIds } from '../../../redux/selectors/card.selector';
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
export class DetailedPageComponent implements OnInit {
  cardItemId: string = '';
  private route = inject(ActivatedRoute);
  cardDataService = inject(CardDataService);
  store = inject(Store);
  cardItem$!: Observable<CardItemModel>;
  isFavorite$!: Observable<boolean>;

  ngOnInit() {
    this.cardItemId = this.route.snapshot.params['id'];
    this.cardItem$ = this.cardDataService.getCardById(this.cardItemId);
    this.isFavorite$ = this.store
      .select(selectFavoriteVideoIds)
      .pipe(map((ids) => ids.includes(this.cardItemId)));
  }

  toggleFavoriteStatus(): void {
    if (this.cardItemId) {
      this.store.dispatch(toggleFavorite({ videoId: this.cardItemId }));
    }
  }
}
