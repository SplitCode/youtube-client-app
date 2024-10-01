import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public isFilterShown$$ = new BehaviorSubject<boolean>(false);
  public isSettingsVisible$$ = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        map(
          (event: NavigationEnd) => !event.urlAfterRedirects.startsWith('/main/details/'),
        ),
      )
      .subscribe((isVisible) => {
        this.isSettingsVisible$$.next(isVisible);
        if (!isVisible) {
          this.isFilterShown$$.next(false);
        }
      });
  }

  toggleFilter(): void {
    this.isFilterShown$$.next(!this.isFilterShown$$.getValue());
  }
}
