import { Component, input, OnDestroy } from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Car } from '../../types/car.interface';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Color } from '../../types/colors.enum';
import { CarType } from '../../types/carType.enum';
import { FuelType } from '../../types/fuelType.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { MatButtonModule } from '@angular/material/button';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-car-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatLabel,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './sell-car-component.component.html',
  styleUrl: './sell-car-component.component.css',
})
export class SellCarComponentComponent implements OnDestroy {
  car$: Observable<Car | null> = new Observable<Car | null>();
  colorOptions = Object.values(Color);
  typeOptions = Object.values(CarType);
  fuelOptions = Object.values(FuelType);
  transOptions = Object.values(TransimissionType);
  brandOptions = Object.values(CarBrand);
  modelOptions = Object.values(CarModels);

  createCarSale = new FormGroup({
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    fuelType: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    enginePower: new FormControl('', Validators.required),
    doors: new FormControl('', Validators.required),
    seats: new FormControl('', Validators.required),
    transmission: new FormControl('', Validators.required),
  });

  subscription: Subscription = new Subscription();
  carId = '';

  constructor(
    private readonly carService: CarsService,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
