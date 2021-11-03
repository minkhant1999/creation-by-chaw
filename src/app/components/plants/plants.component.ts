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
    },
    {
      name: "Guppy Grass",
      price: 2000,
      image: "assets/img/guppy grass.jpg",
      link: "star_grass"
    },
    {
      name: "Hygrophila lancea 'Araguaia'",
      price: 2000,
      image: "assets/img/Hygrophila lancea 'Araguaia'.jpeg",
      link: "star_grass"
    },
    {
      name: "Hygrophila polysperma 'Rosanervig'",
      price: 2000,
      image: "assets/img/Hygrophila polysperma 'Rosanervig'.jpeg",
      link: "star_grass"
    },
    {
      name: "Cabomba Green",
      price: 2000,
      image: "https://firebasestorage.googleapis.com/v0/b/store-27b2a.appspot.com/o/aquatic-plants%2FCabomba%20Green.jpeg?alt=media&token=353eed4c-70c5-4f15-bb89-78323356fd08",
      link: "Cabomba_Green"
    },
  ]

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Plant) {
    this.cart.addProduct(product)
  }
}
