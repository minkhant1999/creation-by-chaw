import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Plant } from 'src/app/components/plants/plants.component';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Router } from '@angular/router';

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

  fullName = ''
  phoneNumber = ''
  address = ''
  note = ''
  items: any[] = []

  constructor(private cart: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {

    this.cart.getCarts().subscribe(data => {
      this.carts = data;
      this.total = 0;

      let items: any = []

      this.carts.forEach(product => {
        this.total += product.price;

        let x = items.find((p: any) => p.link == product.link);
        if (x) {
          x.quantity += 1
        } else {
          items.push(product);
          product.quantity = 1;
        }
        this.items = items
        this.carts = items
      })
    })
  }
  removeFromCart(product: Plant) {
    this.cart.removeProduct(product)
  }
  completeOrder() {
    // `Order Recieved from ${this.fullName}.\n\nTotal Items: ${this.items.length} (${this.total}KS.)`
    this.checkoutService.submitOrderDetails({
      address: this.address,
      fullName: this.fullName,
      phoneNumber: this.phoneNumber,
      note: this.note,
      items: this.items
    }).subscribe(() => {
      this.cart.removeAll();
      this.router.navigate(['/plants'])
    })
  }
}
