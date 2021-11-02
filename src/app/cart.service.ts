import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plant } from './components/plants/plants.component';

let initialData: Plant[] = [];

if ('localStorage' in window) {
  try {
    let storageData: any = window.localStorage.getItem('__carts');
    if (storageData) {
      initialData = JSON.parse(storageData);
    }
  } catch (e) {
    window.localStorage.clear();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Plant[] = initialData;

  private carts = new BehaviorSubject<any[]>(this.products);

  addProduct(product: Plant) {
    this.products.push(product);
    this.carts.next(this.products);

    if ('localStorage' in window) {
      window.localStorage.setItem("__carts", JSON.stringify(this.products));
    }
  }

  getCarts() {
    return this.carts;
  }

  removeProduct(product: Plant) {
    this.products = this.products.filter(p => p != product);
    this.carts.next(this.products);

    if ('localStorage' in window) {
      window.localStorage.setItem("__carts", JSON.stringify(this.products));
    }
  }
}
