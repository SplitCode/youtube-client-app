import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { BehaviorSubject, of } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { HeaderService } from '../../services/header-service/header.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authServiceMock: Partial<AuthService>;
  let headerServiceMock: Partial<HeaderService>;

  beforeEach(async () => {
    authServiceMock = {
      isAuthenticated$: of(true),
      logout: jest.fn(),
    };

    headerServiceMock = {
      isSettingsVisible$$: new BehaviorSubject<boolean>(true),
      isFilterShown$$: new BehaviorSubject<boolean>(false),
      toggleFilter: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterModule.forRoot([])],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: HeaderService, useValue: headerServiceMock },
        provideMockStore({}),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle filter visibility', () => {
    component.toggleFilter();
    expect(headerServiceMock.toggleFilter).toHaveBeenCalled();
  });

  it('should call logout method from AuthService', () => {
    component.logout();
    expect(authServiceMock.logout).toHaveBeenCalled();
  });

  it('should show settings button if isSettingsVisible$ is true', () => {
    const settingsButton = fixture.nativeElement.querySelector(
      'app-settings-button',
    );
    expect(settingsButton).toBeTruthy();
  });

  it('should show authenticated content if isAuthenticated$ is true', () => {
    const loginInfo = fixture.nativeElement.querySelector('app-login-info');
    expect(loginInfo).toBeTruthy();
  });
});
