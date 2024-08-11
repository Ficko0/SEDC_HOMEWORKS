import {
  AfterViewInit,
  Component,
  computed,
  effect,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ChildComponent } from '../../signal/child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h1>Parent Component From Signal Folder</h1>
    <button (click)="incrementCount()">Increment Counter</button>
    <button (click)="changeName()">Change Name</button>
    <p>Name: {{ name() }}</p>
    <p>Name Length: {{ nameLength() }}</p>
    <button (click)="toggleChild()">Toggle Child</button>
    @if (showChild()) {
    <app-child [counter]="counter()" />
    }
  `,
  styleUrl: './parent.component.css',
})
export class ParentComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  // State variables
  name = signal<string>('Initial Name');
  counter = signal<number>(0);
  showChild = signal<boolean>(false);
  nameLength = computed(() => this.name.length);

  incrementCount() {
    // this.counter += 1;
    // The above method is for older versions, the below method is the newest
    this.counter.update((val) => val + 1);
  }

  changeName() {
    this.name.update(() => 'Some other name');
  }

  toggleChild() {
    this.showChild.update((prevValue) => !prevValue);
  }

  constructor() {
    console.log(`Signal Parent constructor`);

    // This is the same as useEffect in React,, in here we don't have a dependency array
    // This effect is for keeping track of the counter
    effect(() => {
      console.log(`Signal Parent effect`);

      console.log(`Current value of the counter is: ${this.counter()}`);
    });

    // This effect is for doing a clean-up
    effect((onCleanup) => {
      const user = 'John Doe';
      const timer = setTimeout(() => {
        console.log(`2 seconds ago the component was destroyed`);
      }, 2000);
      // This is function onCleanup is used for basically cleaning up after something has finished.
      // It's equal as NgOnDestroy
      onCleanup(() => {
        console.log(`Child component clean-up`);
        clearTimeout(timer);
      });
    });
  }

  ngOnInit(): void {
    console.log(`Signal Parent OnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Signal Parent OnChanges`, changes);
  }

  ngAfterViewInit(): void {
    console.log(`Signal Parent AfterViewInit`);
  }

  ngOnDestroy(): void {
    console.log(`Signal Parent OnDestroy`);
  }
}
