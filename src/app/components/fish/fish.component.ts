import { Component, OnInit } from '@angular/core';
import { FishesService } from 'src/app/services/fishes.service';
import { CartService } from 'src/app/services/cart.service';

export interface Fish {
  name: string;
  price: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  constructor(private fish: FishesService, private cart: CartService) { }

  fishes: Fish[] = [];

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.fish.getAllFishes().subscribe(data => {

      this.fishes = Object.values(data);
    })
  }
  addToCart(fish: Fish) {
    this.cart.addFish(fish)
  }

}
