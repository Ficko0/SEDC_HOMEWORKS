import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iteration',
  standalone: true,
  imports: [NgFor],
  templateUrl: './iteration.component.html',
  styleUrl: './iteration.component.css',
})
export class IterationComponent {
  cars: string[] = ['bmw', 'mercedes', 'opel'];
}
