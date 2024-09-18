import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarCardComponent } from '../car-card/car-card.component';
import { Car } from '../../types/car.interface';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-display-page',
  standalone: true,
  imports: [MatGridListModule, CarCardComponent],
  providers: [CarsService],
  templateUrl: './car-display-page.component.html',
  styleUrl: './car-display-page.component.css',
})
export class CarDisplayPageComponent {
  cars = input<Car[]>([]);
}
