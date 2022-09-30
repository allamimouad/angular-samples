import { Component, OnInit } from '@angular/core';
import { Stock } from '../istock';

@Component({
  selector: 'app-home-mediator831',
  template: `
    <p>
      home-mediator831 works!
    </p>
    <app-price-quoter831 (buy)="priceHandler($event)" >
    </app-price-quoter831>
    <app-order831 [stock]="emmitedStock" ></app-order831>
  `,
  styles: [
  ]
})
export class HomeMediator831Component implements OnInit {

  emmitedStock! : Stock;

  constructor() { }

  ngOnInit(): void {
  }

  priceHandler(recievedStock : Stock){
    console.log(recievedStock);
    this.emmitedStock = recievedStock;
  }

}
