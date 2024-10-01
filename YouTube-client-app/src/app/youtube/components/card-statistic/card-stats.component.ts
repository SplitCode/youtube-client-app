import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  standalone: true,
  imports: [],
  templateUrl: './card-stats.component.html',
  styleUrl: './card-stats.component.scss',
})
export class CardStatsComponent {
  @Input() viewCount!: string;
  @Input() likeCount!: string;
  @Input() dislikeCount!: string;
  @Input() commentCount!: string;
}
