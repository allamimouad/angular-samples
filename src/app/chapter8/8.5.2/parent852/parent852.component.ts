import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent852',
  template: `
    <div class="wrapper">
      <p>
        parent852 works!
      </p>
      <div> this div is in the parent </div>

      <app-child852>
        <div class="header">this is the header, created on {{todaysDate}} </div>
        <div class="footer"> this is a footer </div>
      </app-child852>
      
    </div>
  `,
  styles: [`
  .wrapper {background : green}
`]
})
export class Parent852Component implements OnInit {

  todaysDate : string = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {
  }

}
