import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishesService {
  private fishUrl = 'https://art-of-bloom-default-rtdb.firebaseio.com/fishes.json';

  constructor(private http: HttpClient) { }

  getAllFishes() {
    return this.http.get<any>(this.fishUrl);
  }
}
