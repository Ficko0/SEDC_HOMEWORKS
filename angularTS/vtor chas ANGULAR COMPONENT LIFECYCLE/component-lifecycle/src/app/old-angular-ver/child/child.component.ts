import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GrandparentComponent } from '../grandparent/grandparent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandparentComponent],
  template: `<h2>Child Component</h2>
    <p>
      Counter tracking change in the child component sent from the parent:
      {{ counter }}
    </p>
    <button (click)="logSomething()">Log Something</button>
    <app-grandparent [name]="name" /> `,
  styleUrl: './child.component.css',
})
export class ChildComponent
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
  // Decorator input ALWAYS comes first (even before the constructor) !!!
  @Input() counter: number = 0;
  @Input() name: string = '';

  logSomething() {
    console.log(`Something from the child component`);
  }

  constructor() {
    console.log('Child Constructor');
  }

  // Once on component initialization
  ngOnInit(): void {
    console.log(`Child onInit`);
  }

  // Each time a change happens in the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child changes`, changes);
  }

  ngDoCheck(): void {
    console.log(`Child doCheck`);
  }

  ngAfterContentInit(): void {
    console.log('Child afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(`Child afterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`Child afterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`Child afterViewChecked`);
  }

  // Right before the component is closed / destroyed
  ngOnDestroy(): void {
    console.log(`Child onDestroy`);
  }
}
