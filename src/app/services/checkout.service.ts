import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../components/plants/plants.component';

export interface Order {
  fullName: string; phoneNumber: string; address: string; note: string; items: Array<Plant & { quantity: number }>;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private requestUrl = 'https://art-of-bloom-default-rtdb.firebaseio.com/orderDetails.json'

  constructor(private http: HttpClient) { }

  getOrderDetails() { }

  submitOrderDetails(order: Order) {
    this.http.post('https://art-of-bloom.vercel.app/api/notify', { text: 'New Order Recieved!' })
    return this.http.post(this.requestUrl, order);
  }
}
