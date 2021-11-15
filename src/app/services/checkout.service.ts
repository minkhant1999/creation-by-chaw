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
  private notifyUrl = 'https://art-of-bloom.vercel.app/api/notify';
  private getOrderDetailsUrl = 'https://art-of-bloom.vercel.app/api/orderDetails';
  constructor(private http: HttpClient) { }

  getOrderDetails(token: string) {
    return this.http.get(this.getOrderDetailsUrl, {
      params: { token }
    });
  }

  submitOrderDetails(order: Order) {
    return this.http.post(this.requestUrl, {
      ...order,
      createdAt: { '.sv': 'timestamp' },
      updatedAt: { '.sv': 'timestamp' },
    });
  }

  notifyNewOrder(text: string) {
    return this.http.post(this.notifyUrl, { text });
  }
}
