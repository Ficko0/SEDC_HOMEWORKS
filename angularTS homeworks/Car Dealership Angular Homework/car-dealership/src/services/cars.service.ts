import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../types/car.interface';
import { SearchCarQuery } from '../types/SearchCarQuery.interface';
import { Response } from '../types/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  carPath: string = 'http://localhost:3000/api/cars';

  constructor(private readonly http: HttpClient) {}

  getCars(searchQuery: SearchCarQuery = {}): Observable<Response<Car[]>> {
    return this.http.get<Response<Car[]>>(this.carPath, {
      params: {
        ...searchQuery,
      },
    });
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.carPath}/${id}`);
  }

  createCarSale(car: Car) {
    return this.http.post<Car>(this.carPath, car);
  }
}
