import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Plant } from 'src/app/components/plants/plants.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  carts: any[] = []
  cartOpen = ''
  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }
  removeFromCart(product: Plant) {
    this.cart.removeProduct(product)
  }
}
