import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

// import { getCardsSuccess } from '../../redux/actions/card.actions';
// import { CardModel } from '../../redux/state.model';
import { CardDataService } from '../../../youtube/services/card-data.service';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let storeMock: Partial<Store>;
  let cardDataServiceMock: Partial<CardDataService>;

  beforeEach(() => {
    storeMock = {
      select: jest.fn().mockReturnValue(of([])),
      dispatch: jest.fn(),
    };

    // cardDataServiceMock = {
    //   getCardsDataWithStatistics: jest.fn().mockReturnValue(of([])),
    //   getNextPageToken: jest.fn(),
    //   getPrevPageToken: jest.fn(),
    // };

    TestBed.configureTestingModule({
      providers: [
        SearchService,
        { provide: Store, useValue: storeMock },
        { provide: CardDataService, useValue: cardDataServiceMock },
      ],
    });

    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update filter word', () => {
    service.updateFilterWord('test');
    service.currentFilterWord$.subscribe((word) => {
      expect(word).toBe('test');
    });
  });
});
