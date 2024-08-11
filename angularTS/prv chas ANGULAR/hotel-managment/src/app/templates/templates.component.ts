import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Hello from {{ name }} Component</h1>
    </div>
  `,
  styleUrl: './templates.component.css',
})
export class TemplatesComponent {
  name = 'random';
}
