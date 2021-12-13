import { Component, OnInit } from '@angular/core';

export interface TerrestrialPlant {
  name: string;
  image: string;
  price: number;
  link: string;
}
@Component({
  selector: 'app-air-plants',
  templateUrl: './air-plants.component.html',
  styleUrls: ['./air-plants.component.css']
})


export class AirPlantsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
