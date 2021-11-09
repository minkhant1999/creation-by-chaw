import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PlantService } from 'src/app/services/plant.service';

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

      this.plants = Object.values(data);
    })
  }

  addToCart(product: Plant) {
    this.cart.addProduct(product)
  }
}
