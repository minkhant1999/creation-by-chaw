import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PlantService } from 'src/app/services/plant.service';
import { PotService } from 'src/app/services/pot.service';

export interface Pot {
  name: string;
  image: string;
  price: number;
  link: string;
}
@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css'],
})
export class PotsComponent implements OnInit {
  pots: Pot[] = [];

  constructor(
    private cart: CartService,
    private plant: PlantService,
    private pot: PotService
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.plant.getAllPlants().subscribe((data: any) => {
      let plants: Pot[] = Object.values(data);
      this.pots = plants.reverse();
    });
  }

  addToCart(product: Pot) {
    this.cart.addProduct(product);
  }
}
