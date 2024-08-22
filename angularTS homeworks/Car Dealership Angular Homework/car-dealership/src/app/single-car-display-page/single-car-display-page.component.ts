import { Component, Input, input, OnInit } from '@angular/core';
import { CarCardComponent } from '../car-card/car-card.component';

@Component({
  selector: 'app-single-car-display-page',
  standalone: true,
  imports: [CarCardComponent],
  templateUrl: './single-car-display-page.component.html',
  styleUrl: './single-car-display-page.component.css',
})
export class SingleCarDisplayPageComponent {
  @Input() id: string = '';
}
