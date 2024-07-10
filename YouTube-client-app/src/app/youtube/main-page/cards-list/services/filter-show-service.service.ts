import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterShowService {
  private filterShow = new BehaviorSubject<boolean>(false);
  currentFilterShow = this.filterShow.asObservable();

  toggleFilterShow() {
    this.filterShow.next(!this.filterShow.value);
  }
}
