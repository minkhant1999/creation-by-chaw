import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Plant } from 'src/app/components/plants/plants.component';

export interface Orderform {
  fullName: string;
  phoneNumber: string;
  address: string;
  note: string;

}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carts: any[] = []
  cartOpen = ''
  total = 0
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getCarts().subscribe(data => {
      this.carts = data;
      this.total = 0;
      this.carts.forEach(product => {
        this.total += product.price;
      })
    })
  }
  removeFromCart(product: Plant) {
    this.cart.removeProduct(product)
  }
  completeOrder() {

  }
}
