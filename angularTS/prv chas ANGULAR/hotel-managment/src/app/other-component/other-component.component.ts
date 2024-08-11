import { Component } from '@angular/core';

@Component({
  selector: 'app-other-component',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1 class="bg-red">Red BG BOX</h1>
    </div>
  `,
  styles: `
  .text-blue {
    color: blue;
  }
  `,
})
export class OtherComponentComponent {}
