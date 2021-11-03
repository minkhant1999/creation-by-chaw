import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from './components/plants/plants.component';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plantsUrl = 'https://art-of-bloom-default-rtdb.firebaseio.com/plants.json';
  private plantDetailsUrl = 'https://art-of-bloom-default-rtdb.firebaseio.com/plantDetails';

  constructor(private http: HttpClient) {
  }

  getAllPlants() {
    return this.http.get<Plant[]>(this.plantsUrl);
  }

  getPlantDetails(id: string) {
    return this.http.get<any>(this.plantDetailsUrl + '/' + id + '.json');
  }
}
