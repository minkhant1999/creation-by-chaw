import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

interface Plant {
  name: string;
  difficulty: string;
  type: string;
  price: string
}

interface Banner {
  src: string;
  alt: string;
}

@Component({

  selector: 'app-plantdetails',
  templateUrl: './plantdetails.component.html',
  styleUrls: ['./plantdetails.component.css']
})
export class PlantdetailsComponent implements OnInit {
  banners: Banner[] = [
    { src: "../../../../assets/img/Hygrophila_Difformis_1.png", alt: "Two each of gray, white, and black shirts laying flat." },
    { src: "../../../../assets/img/hygrophila_difformis.png", alt: "Two each of gray, white, and black shirts laying flat." }
  ];

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    // rewind: true,
    nav: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
