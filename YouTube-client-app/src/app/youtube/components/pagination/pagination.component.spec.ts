import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SearchService } from '../../../core/services/search-service/search.service';
import { PaginationComponent } from './pagination.component';

class MockSearchService {
  loadNextPage = jest.fn(() => of(true));
  loadPrevPage = jest.fn(() => of(true));
}

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let mockSearchService: MockSearchService;

  beforeEach(async () => {
    mockSearchService = new MockSearchService();

    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [{ provide: SearchService, useValue: mockSearchService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment currentPage on goToNextPage success', () => {
    component.goToNextPage();
    expect(component.currentPage).toBe(2);
    expect(mockSearchService.loadNextPage).toHaveBeenCalled();
  });

  it('should decrement currentPage on goToPrevPage success', () => {
    component.currentPage = 2;
    component.goToPrevPage();
    expect(component.currentPage).toBe(1);
    expect(mockSearchService.loadPrevPage).toHaveBeenCalled();
  });

  it('should not decrement currentPage if already on first page', () => {
    component.currentPage = 1;
    component.goToPrevPage();
    expect(component.currentPage).toBe(1);
    expect(mockSearchService.loadPrevPage).not.toHaveBeenCalled();
  });
});
