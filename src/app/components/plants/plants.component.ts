import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { PlantService } from 'src/app/plant.service';

export interface Plant {
  name: string;
  image: string;
  price: number;
  link: string;
}

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  difficulty = "Easy";

  plants: Plant[] = [];

  constructor(private cart: CartService, private plant: PlantService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.plant.getAllPlants().subscribe(data => {
      this.plants = data;
    })
  }

  addToCart(product: Plant) {
    this.cart.addProduct(product)
  }
}
