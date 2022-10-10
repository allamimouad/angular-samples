import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child85',
  template: `
    <div class="wrapper">
      <p>
        child85 works!
      </p>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .wrapper {background: lightgreen;}
  `]
})
export class Child85Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
