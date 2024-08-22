import { Car } from './../../types/car.interface';
import {
  Component,
  computed,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarCardComponent } from '../car-card/car-card.component';
import { Subscription } from 'rxjs';
import { CarsService } from '../../services/cars.service';
import { CarType } from '../../types/carType.enum';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { FilterComponentComponent } from '../filter-component/filter-component.component';
import { Color } from '../../types/colors.enum';
import { FuelType } from '../../types/fuelType.enum';
import { CarDisplayPageComponent } from '../car-display-page/car-display-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    CarCardComponent,
    FilterComponentComponent,
    CarDisplayPageComponent,
  ],
  providers: [CarsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  cars = signal<Car[]>([]);
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
  // Subscription
  subscription: Subscription = new Subscription();

  // The "Advanced" Filter
  filteredCars = computed<Car[]>(() => {
    let filteredCars: Car[] = this.cars();

    if (this.carBrand() !== CarBrand.None) {
      filteredCars = filteredCars.filter(
        (car) => car.brand === this.carBrand()
      );
    }

    if (this.carType() !== CarType.None) {
      filteredCars = filteredCars.filter((car) => car.type === this.carType());
    }

    if (this.carModel() !== CarModels.None) {
      filteredCars = filteredCars.filter(
        (car) => car.model === this.carModel()
      );
    }

    if (this.carColor() !== Color.None) {
      filteredCars = filteredCars.filter(
        (car) => car.color === this.carColor()
      );
    }

    if (this.carTransmission() !== TransimissionType.None) {
      filteredCars = filteredCars.filter(
        (car) => car.transmission === this.carTransmission()
      );
    }

    if (this.carFuelType() !== FuelType.None) {
      filteredCars = filteredCars.filter(
        (car) => car.fuelType === this.carFuelType()
      );
    }

    if (this.isNew()) {
      filteredCars = filteredCars.filter((car) => car.isNew);
    }

    if (this.priceFrom() > 0) {
      filteredCars = filteredCars.filter(
        (car) => car.price >= this.priceFrom()
      );
    }

    if (this.priceTo() > 0) {
      filteredCars = filteredCars.filter((car) => car.price <= this.priceTo());
    }

    return filteredCars;
  });

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.subscription = this.carService.cars.subscribe((cars: Car[]) => {
      this.cars.set(cars);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
