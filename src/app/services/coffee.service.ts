import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoffeeInfo } from '../models/coffee.models';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor( private http: HttpClient) {}

  coffeeAPI = 'https://random-data-api.com/api/coffee/random_coffee'

  getCoffee() {
    return this.http.get<ICoffeeInfo>(this.coffeeAPI)
  }
}
