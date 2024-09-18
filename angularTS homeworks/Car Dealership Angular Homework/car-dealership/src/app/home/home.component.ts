import { Car } from './../../types/car.interface';
import { Component, effect, OnInit, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarCardComponent } from '../car-card/car-card.component';
import { map, Observable, tap } from 'rxjs';
import { CarsService } from '../../services/cars.service';
import { CarType } from '../../types/carType.enum';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { FilterComponentComponent } from '../filter-component/filter-component.component';
import { Color } from '../../types/colors.enum';
import { FuelType } from '../../types/fuelType.enum';
import { CarDisplayPageComponent } from '../car-display-page/car-display-page.component';
import { SearchCarQuery } from '../../types/SearchCarQuery.interface';
import { AsyncPipe } from '@angular/common';
import { Response } from '../../types/response.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    CarCardComponent,
    FilterComponentComponent,
    CarDisplayPageComponent,
    AsyncPipe,
  ],
  providers: [CarsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cars$: Observable<Car[]> = new Observable<Car[]>();
  // Creating the filters
  priceFrom = signal<number>(0);
  priceTo = signal<number>(300000);
  carType = signal<CarType>(CarType.None);
  carColor = signal<Color>(Color.None);
  isNew = signal<boolean>(false);
  carBrand = signal<CarBrand>(CarBrand.None);
  carModel = signal<CarModels>(CarModels.None);
  carFuelType = signal<FuelType>(FuelType.None);
  carTransmission = signal<TransimissionType>(TransimissionType.None);

  constructor(private carService: CarsService) {
    effect(
      () => {
        const searchQueryParams: SearchCarQuery = {};

        if (this.carBrand() !== CarBrand.None) {
          searchQueryParams.carBrand = this.carBrand();
        }

        if (this.carType() !== CarType.None) {
          searchQueryParams.carType = this.carType();
        }

        if (this.carModel() !== CarModels.None) {
          searchQueryParams.carModel = this.carModel();
        }

        if (this.carColor() !== Color.None) {
          searchQueryParams.carColor = this.carColor();
        }

        if (this.carTransmission() !== TransimissionType.None) {
          searchQueryParams.carTransmission = this.carTransmission();
        }

        if (this.carFuelType() !== FuelType.None) {
          searchQueryParams.carFuelType = this.carFuelType();
        }

        if (this.isNew()) {
          searchQueryParams.isNew = this.isNew();
        }

        if (this.priceFrom() > 0) {
          searchQueryParams.priceFrom = this.priceFrom();
        }

        if (this.priceTo() > 0) {
          searchQueryParams.priceTo = this.priceTo();
        }

        this.getCars(searchQueryParams);
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(searchParams?: SearchCarQuery) {
    this.cars$ = this.carService
      .getCars(searchParams)
      .pipe(map((response: Response<Car[]>) => response.payload));
  }
}
