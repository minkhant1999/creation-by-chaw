import { Component, OnInit } from '@angular/core';

interface Plant {
  name: string;
  difficulty: string;
  type: string;
  price: string
}

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  difficulty = "Easy";

  constructor() { }

  ngOnInit(): void {
  }

}
