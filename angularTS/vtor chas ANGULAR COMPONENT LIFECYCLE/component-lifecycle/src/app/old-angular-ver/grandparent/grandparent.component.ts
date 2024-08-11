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

@Component({
  selector: 'app-grandparent',
  standalone: true,
  imports: [],
  template: `
    <h1>Grandchild Component</h1>
    <p>
      The name of the thingy sent from parent to child to grandchild:
      {{ name }}
    </p>
  `,
  styleUrl: './grandparent.component.css',
})
export class GrandparentComponent
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
  @Input() name: string = '';

  constructor() {
    console.log('Grandchild Constructor');
  }

  // Once on component initialization
  ngOnInit(): void {
    console.log(`Grandchild onInit`);
  }

  // Each time a change happens in the component
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Grandchild changes`, changes);
  }

  ngDoCheck(): void {
    console.log(`Grandchild doCheck`);
  }

  ngAfterContentInit(): void {
    console.log('Grandchild afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(`Grandchild afterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`Grandchild afterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`Grandchild afterViewChecked`);
  }

  // Right before the component is closed / destroyed
  ngOnDestroy(): void {
    console.log(`Grandchild onDestroy`);
  }
}
