import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { StylesComponent } from './styles/styles.component';
import { OtherComponentComponent } from './other-component/other-component.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { IterationComponent } from './iteration/iteration.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplatesComponent,
    StylesComponent,
    OtherComponentComponent,
    ConditionalComponent,
    IterationComponent,
    DataBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hotel Managment 1.0';
}
