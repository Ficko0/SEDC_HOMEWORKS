import { Component, input } from '@angular/core';
import { Car } from '../../types/car.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarCardComponent } from "../car-card/car-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, CarCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cars = input<Car[]>([]);
}
