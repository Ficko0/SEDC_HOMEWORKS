import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  name: string = '';
  age: number = 0;
  isAdult: boolean = false;

  handleNameChange(event: any) {
    console.log(event.target.value);
    this.name = event.target.value;
  }
}
