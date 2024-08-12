import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

// import { CardsListModel } from '../models/cards-list.model';
import { CardDataService } from './card-data.service';
import { mockCardsDataResponse } from './card-data.service.fixtures';

describe('CardDataService', () => {
  let service: CardDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CardDataService,
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });

    service = TestBed.inject(CardDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve cards data successfully', () => {
    const query = 'test query';
    const pageToken = 'pageToken';

    service.getCardsData(query, pageToken).subscribe((items) => {
      expect(items.length).toBe(2);
      expect(items[0].id.videoId).toBe('1');
      expect(items[1].id.videoId).toBe('2');
    });

    const req = httpMock.expectOne((request) => request.url === '/api/search' && request.params.has('q') && request.params.get('q') === query);

    expect(req.request.method).toBe('GET');
    req.flush(mockCardsDataResponse);
  });
});
