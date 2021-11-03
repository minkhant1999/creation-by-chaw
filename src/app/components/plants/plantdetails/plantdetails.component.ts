import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from "ngx-owl-carousel-o";
import { PlantService } from 'src/app/plant.service';

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
  name = '';
  body = '';
  images: string[] = [];
  type = ''
  rate = ''
  light = ''
  co2 = ''
  error = '';

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

  constructor(private route: ActivatedRoute, private plant: PlantService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params.name;
      this.error = '';
      this.plant.getPlantDetails(id).subscribe((data) => {
        if (!data) {
          this.error = 'Not Found'
          return
        }
        this.name = data.name;
        this.body = data.body;
        this.images = data.images;
        this.type = data.type;
        this.rate = data.rate;
        this.light = data.light;
        this.co2 = data.co2;
      })
    })
  }

}
