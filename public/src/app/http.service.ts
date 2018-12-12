import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes = () => {
    return this._http.get('http://localhost:8000/cakes');
  };

  newCake = (cake) => {
      return this._http.post('http://localhost:8000/cakes', cake);
  }

  newRating = (cakeId, rating) => {
      return this._http.post('http://localhost:8000/cakes/' + cakeId + '/ratings', rating);
  }
}
