import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishesService {
  private fishUrl = 'https://art-of-bloom-default-rtdb.firebaseio.com/fishes.json';
  private _fishes: any[] = []
  private _fetched = false;
  private fishes = new BehaviorSubject<any[]>([])

  constructor(private http: HttpClient, private loading: LoadingBarService) { }

  getAllFishes() {
    if (!this._fetched) {
      this._fetched = true;
      this.loading.start();
      this.http.get<any>(this.fishUrl).subscribe((data) => {
        this._fishes = Object.entries(data).map((([id, value]: [string, any]) => ({ id, ...value })));
        this.fishes.next(this._fishes);
        this.loading.complete();
      });
    }
    return this.fishes.asObservable();
  }
}
