import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Plant } from 'src/app/components/plants/plants.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navOpen = false
  cartOpen = false
  carts: any[] = []
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

  openNav() {
    this.navOpen = !this.navOpen
  }

  openCart() {
    this.cartOpen = !this.cartOpen
  }
  removeFromCart(product: Plant) {
    this.cart.removeProduct(product)
  }
}
