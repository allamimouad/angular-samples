import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child852',
  template: `
    <div class="wrapper">
      <ng-content select=".header"></ng-content>
      <p>
        child852 works!
      </p>
      <ng-content select=".footer"></ng-content>
    </div>
  `,
  styles: [`
    .wrapper {background : pink}
  `]
})
export class Child852Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
