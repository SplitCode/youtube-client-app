import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { CardItemComponent } from './card-item.component';

describe('SearchItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemComponent, RouterModule.forRoot([])],
      providers: [
        provideMockStore({}),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;

    component.cardItem = {
      kind: 'youtube#video',
      etag: 'etag-value',
      id: {
        kind: 'youtube#video',
        videoId: '12345',
      },
      snippet: {
        publishedAt: '2024-08-01T00:00:00Z',
        channelId: 'UC123456789',
        title: 'Test Video',
        description: 'Test Description',
        thumbnails: {
          default: {
            url: 'https://example.com/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://example.com/medium.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://example.com/high.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Test Channel',
        liveBroadcastContent: 'none',
        publishTime: '2024-08-01T00:00:00Z',
      },
      statistics: {
        viewCount: '1000',
        likeCount: '100',
        favoriteCount: '10',
        commentCount: '20',
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
