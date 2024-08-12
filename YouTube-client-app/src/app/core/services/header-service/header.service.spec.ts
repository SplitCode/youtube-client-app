import { TestBed } from '@angular/core/testing';
import {
  NavigationEnd, Router, RouterEvent, RouterModule
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;
  let eventsSubject: BehaviorSubject<RouterEvent>;

  beforeEach(() => {
    eventsSubject = new BehaviorSubject<RouterEvent>(new NavigationEnd(0, '', ''));

    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [
        HeaderService,
        {
          provide: Router,
          useValue: {
            events: eventsSubject.asObservable(),
            navigate: jest.fn(),
          },
        },
      ],
    });

    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle isFilterShown$$ when toggleFilter is called', () => {
    const initialFilterShown = service.isFilterShown$$.getValue();
    service.toggleFilter();
    expect(service.isFilterShown$$.getValue()).toBe(!initialFilterShown);
  });

  it('should set isSettingsVisible$$ to false when navigating to /main/details/', () => {
    eventsSubject.next(new NavigationEnd(0, '/previous-url', '/main/details/1'));
    expect(service.isSettingsVisible$$.getValue()).toBe(false);
  });

  it('should set isFilterShown$$ to false when navigating to /main/details/', () => {
    service.isFilterShown$$.next(true);
    eventsSubject.next(new NavigationEnd(0, '/previous-url', '/main/details/1'));
    expect(service.isFilterShown$$.getValue()).toBe(false);
  });

  it('should set isSettingsVisible$$ to true when navigating to a URL that is not /main/details/', () => {
    eventsSubject.next(new NavigationEnd(0, '/previous-url', '/main/other'));
    expect(service.isSettingsVisible$$.getValue()).toBe(true);
  });
});
