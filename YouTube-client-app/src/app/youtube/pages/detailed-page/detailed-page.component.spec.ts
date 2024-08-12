import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { DetailedPageComponent } from './detailed-page.component';

describe('DetailedPageComponent', () => {
  let component: DetailedPageComponent;
  let fixture: ComponentFixture<DetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPageComponent, RouterModule.forRoot([])],
      providers: [
        provideMockStore({}),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
