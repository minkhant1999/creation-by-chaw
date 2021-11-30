import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private isProductTabOpen = false;
  private productTabOpen = new BehaviorSubject<boolean>(this.isProductTabOpen);

  toggleProductTab() {
    this.isProductTabOpen = !this.isProductTabOpen;
    this.productTabOpen.next(this.isProductTabOpen);
  }

  getProductTab() {
    return this.productTabOpen.asObservable();
  }
}
