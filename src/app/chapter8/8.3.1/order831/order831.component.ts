import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../istock';

@Component({
  selector: 'app-order831',
  template: `
    <p>
      order831 works!
    </p>
    {{message}}
  `,
  styles: [
    `:host {background: cyan;}`
  ]
})
export class Order831Component implements OnInit {

  message : string = 'waiting for orders... '

  @Input() set stock(value : Stock){
    if (value && value.bidPrice != undefined) {
      this.message = `Placed order to buy 100 shares
      of ${value.stockSymbol} at
      \$${value.bidPrice.toFixed(2)}`;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
