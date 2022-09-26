import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';



export interface PriceQuote {
  stockSymbol: string;
  lastPrice: number;
}

@Component({
  selector: 'app-price-quoter822',
  template: `
    <p>
      price-quoter822 works!
    </p>
    <strong>Inside PriceQuoterComponent:
        {{priceQuote?.stockSymbol}}
        {{priceQuote?.lastPrice | currency: 'USD'}}
    </strong>
  `,
  styles: [
  ]
})
export class PriceQuoter822Component implements OnInit {

  @Output() lastPrice2 = new EventEmitter<PriceQuote>();
  
  priceQuote! : PriceQuote;

  constructor() { 
    interval(2000)
      .subscribe(data =>{
                    this.priceQuote = {
                      stockSymbol: "IBM",
                      lastPrice: 100 * Math.random()
                    };
                    this.lastPrice2.emit(this.priceQuote);
      })
  }

  ngOnInit(): void {
  }

}
