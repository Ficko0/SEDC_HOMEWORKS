import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Car } from '../../types/car.interface';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { CarType } from '../../types/carType.enum';
import { Color } from '../../types/colors.enum';
import { FuelType } from '../../types/fuelType.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [AsyncPipe],
  providers: [CarsService],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent implements OnInit {
  cars$: Observable<Car | null> = new Observable<Car | null>();

  CarBrand = CarBrand;
  CarModels = CarModels;
  CarType = CarType;
  Color = Color;
  FuelType = FuelType;
  TransmissionType = TransimissionType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarsService
  ) {}

  ngOnInit(): void {
    this.cars$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.carService.getCar(params['id'])),
      catchError((err) => {
        console.log(`Error: ${err}`);
        return of(null);
      })
    );
  }
}
