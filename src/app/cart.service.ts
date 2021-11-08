import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plant } from './components/plants/plants.component';
import { Fish } from './components/fish/fish.component';
let initialPlantData: Plant[] = [];
let initialFishData: Fish[] = [];

if ('localStorage' in window) {
  try {
    let storageData: any = window.localStorage.getItem('__carts');
    if (storageData) {
      initialPlantData = JSON.parse(storageData);
    }
  } catch (e) {
    window.localStorage.clear();
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Plant[] = initialPlantData;
  private fishes: Fish[] = initialFishData;
  private carts = new BehaviorSubject<any[]>(this.products);

  addProduct(product: Plant) {
    this.products.push(product);
    this.carts.next(this.products);

    if ('localStorage' in window) {
      window.localStorage.setItem("__carts", JSON.stringify(this.products));
    }
  }

  addFish(fish: Fish) {
    this.fishes.push(fish);
    this.carts.next(this.fishes);

    if ('localStorage' in window) {
      window.localStorage.setItem("__carts", JSON.stringify(this.fishes));
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
  //Send notification to Admin
  submitOrder() {

  }
}
