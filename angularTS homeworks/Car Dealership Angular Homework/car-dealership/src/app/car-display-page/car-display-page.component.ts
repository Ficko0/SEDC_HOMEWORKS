import { Component, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarCardComponent } from '../car-card/car-card.component';
import { Car } from '../../types/car.interface';

@Component({
  selector: 'app-car-display-page',
  standalone: true,
  imports: [MatGridListModule, CarCardComponent],
  templateUrl: './car-display-page.component.html',
  styleUrl: './car-display-page.component.css',
})
export class CarDisplayPageComponent {
  cars = input<Car[]>([]);
}
