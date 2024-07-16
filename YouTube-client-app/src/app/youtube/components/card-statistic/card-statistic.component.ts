import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  imports: [],
  templateUrl: './card-statistic.component.html',
  styleUrl: './card-statistic.component.scss',
})
export class CardStatisticComponent {
  @Input() viewCount!: string;
  @Input() likeCount!: string;
  @Input() dislikeCount!: string;
  @Input() commentCount!: string;
}
