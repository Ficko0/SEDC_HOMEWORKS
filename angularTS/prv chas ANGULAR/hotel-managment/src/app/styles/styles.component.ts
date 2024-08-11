import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  standalone: true,
  imports: [NgClass],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.css',
})
export class StylesComponent {
  random: number = Math.random() * 10; // 0-9
}
