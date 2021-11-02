import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

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

  plants: Plant[] = [
    {
      name: "Hygrophila Difformis",
      price: 1000,
      image: "assets/img/hygrophila_difformis.png",
      link: "hygrophila_difformis"
    },
    {
      name: "Hygrophila Corymbosa",
      price: 1000,
      image: "assets/img/hygrophila_corymbosa.jpeg",
      link: "hygrophila_corymbosa"
    },
    {
      name: "Hygrophila Polysperma",
      price: 1500,
      image: "assets/img/Hygrophila polysperma.jpeg",
      link: "hygrophila_polysperma"
    },
    {
      name: "Star Grass",
      price: 2000,
      image: "assets/img/star grass.jpg",
      link: "star_grass"
    }
  ]

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Plant) {
    this.cart.addProduct(product)
  }
}
