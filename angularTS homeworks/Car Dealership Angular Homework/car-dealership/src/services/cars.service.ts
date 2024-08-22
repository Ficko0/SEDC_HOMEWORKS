import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../types/car.interface';
import carDb from '../data/cars.json';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _cars: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);

  cars: Observable<Car[]> = this._cars.asObservable();

  constructor() {
    this.updateCars(carDb as Car[]);
  }

  updateCars(cars: Car[]) {
    this._cars.next(cars);
  }
}
