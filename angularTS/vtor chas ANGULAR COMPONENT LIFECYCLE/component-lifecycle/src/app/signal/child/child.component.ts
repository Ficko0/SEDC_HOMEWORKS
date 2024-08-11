import {
  AfterViewInit,
  Component,
  effect,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <h2>Child Component</h2>
    <p>Counter: {{ counter() }}</p>
    <p>Name: {{ name() }}</p>
  `,
  styleUrl: './child.component.css',
})
export class ChildComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  counter = input<number>(0);
  name = signal<string>('');

  constructor() {
    console.log(`Signal Child constructor`);

    // This is the same as useEffect in React, in here we don't have a dependency array
    effect(() => {
      console.log(`Child component Effect init`);
    });

    effect(() => {
      console.log(`Child component Effect for counter:`, this.counter());
    });
  }

  ngOnInit(): void {
    console.log(`Signal Child OnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Signal Child OnChanges`, changes);
  }

  ngAfterViewInit(): void {
    console.log(`Signal Child AfterViewInit`);
  }

  ngOnDestroy(): void {
    console.log(`Signal Child OnDestroy`);
  }
}
