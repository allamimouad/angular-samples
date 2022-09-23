import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout711',
  template: `
    <p>
      flex-layout711 works!
    </p>

    <div class="parent" fxLayout="row"> 
      <div fxFlex class="left"  > LEFT </div>
      <div fxFlex class="right" > RIGHT </div>
    </div>

  `,
  styles: [`
      .parent {height: 100px;}
      .left {background-color: cyan;}
      .right {background-color: yellow;}
  `]
})
export class FlexLayout711Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
