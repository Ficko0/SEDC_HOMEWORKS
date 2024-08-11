import { Component, input } from '@angular/core';
import { Car } from '../../types/car.interface';
import { CarBrand } from '../../types/carBrand.enum';
import { CarModels } from '../../types/carModels.enum';
import { CarType } from '../../types/carType.enum';
import { Color } from '../../types/colors.enum';
import { FuelType } from '../../types/fuelType.enum';
import { TransimissionType } from '../../types/transmission.enum';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTooltipModule,
    NgIf,
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css',
})
export class CarCardComponent {
  car = input<Car | undefined>();

  CarBrand = CarBrand;
  CarModels = CarModels;
  CarType = CarType;
  Color = Color;
  FuelType = FuelType;
  TransmissionType = TransimissionType;
}
