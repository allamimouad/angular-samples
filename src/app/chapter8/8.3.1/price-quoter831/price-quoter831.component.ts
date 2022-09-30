import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { Stock } from '../istock';

@Component({
  selector: 'app-price-quoter831',
  template: `
  
      <button (click)="buyStocks()">Buy</button>
      {{stockSymbol}} {{lastPrice | currency: "USD"}}
    
  `,
  styles: [`
    :host {
      color: green;
      background: pink; 
    }
  `]
})
export class PriceQuoter831Component implements OnInit {

  stockSymbol = "IBM";
  lastPrice!: number;

  @Output() buy : EventEmitter<Stock> = new EventEmitter(); 

  constructor() { 
    interval(2000)
        .subscribe(data =>
        this.lastPrice = 100 * Math.random());
  }

  ngOnInit(): void {
  }

  buyStocks(){
    let stock : Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buy.emit(stock);
  }

}
