import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Plant } from 'src/app/components/plants/plants.component';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navOpen = false
  cartOpen = false
  tabOpen = false
  carts: any[] = []
  items: any[] = []
  totalItems = 0
  totalAmount = 0
  constructor(private cart: CartService, private router: Router, private nav: NavService) { }

  ngOnInit(): void {
    this.nav.getProductTab().subscribe((value) => {
      this.tabOpen = value;
    })

    this.cart.getCarts().subscribe(data => {
      this.carts = data;
      this.totalItems = this.carts.length;
      this.totalAmount = 0;
      let items: any = []
      this.carts.forEach(product => {
        this.totalAmount += product.price;
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

  open(link: string[]) {
    this.navOpen = this.tabOpen = false;
    return this.router.navigate(link)
  }

  openProductTab() {
    this.nav.toggleProductTab()
  }

  openNav() {
    this.navOpen = !this.navOpen
  }

  openCart() {
    this.cartOpen = !this.cartOpen
  }

  removeFromCart(product: Plant) {
    this.cart.removeProduct(product);
  }
}
