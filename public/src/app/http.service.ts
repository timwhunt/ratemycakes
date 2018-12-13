import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes = () => {
    return this._http.get('/cakes');
  };

  newCake = (cake) => {
      return this._http.post('/cakes', cake);
  }

  newRating = (cakeId, rating) => {
      return this._http.post('/cakes/' + cakeId + '/ratings', rating);
  }
}
