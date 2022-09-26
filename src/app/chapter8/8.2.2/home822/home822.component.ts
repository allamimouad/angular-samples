import { Component, OnInit } from '@angular/core';
import { PriceQuote } from '../price-quoter822/price-quoter822.component';

@Component({
  selector: 'app-home822',
  template: `
    <p>
      home822 works!
    </p>
    AppComponent received: {{priceQuote?.stockSymbol}}
                          {{priceQuote?.lastPrice | currency:'USD'}}
    <app-price-quoter822 (lastPrice2)="priceQuoteHandler($event)"></app-price-quoter822 >
  `,
  styles: [
  ]
})
export class Home822Component implements OnInit {

  priceQuote! : PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
