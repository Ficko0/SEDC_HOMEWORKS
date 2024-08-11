import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h1>Parent Component</h1>
    <button (click)="increment()">Increment Count</button>
    <button (click)="changeName()">Change Name</button>
    <button (click)="changeUntrackedValue()">Change untracked Value</button>
    <button (click)="toggleShowChild()">
      {{ showChild ? 'Hide' : 'Show' }} Child
    </button>
    @if (showChild) {
    <app-child [counter]="counter" [name]="name" />
    }
  `,
  styleUrl: './parent.component.css',
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // These are state variables
  counter: number = 0;
  name: string = 'Initial Name';
  unctrackedValue: number = 0;
  showChild: boolean = false;

  increment() {
    this.counter += 1;
  }

  changeName() {
    this.name = 'Some other name';
  }

  changeUntrackedValue() {
    this.unctrackedValue += 1;
  }

  toggleShowChild() {
    this.showChild = !this.showChild;
  }

  // Once on class initialization
  constructor() {
    console.log('Parent Constructor');
  }

  // Once on component initialization
  ngOnInit(): void {
    console.log(`Parent onInit`);
  }

  // Each time a change happens in the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Parent changes`, changes);
  }

  ngDoCheck(): void {
    console.log(`Parent doCheck`);
  }

  ngAfterContentInit(): void {
    console.log('Parent afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(`Parent afterContentChecked`);
  }

  // After the HTML is rendered
  ngAfterViewInit(): void {
    console.log(`Parent afterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`Parent afterViewChecked`);
  }

  // Right before the component is closed / destroyed
  ngOnDestroy(): void {
    console.log(`Parent onDestroy`);
  }
}
