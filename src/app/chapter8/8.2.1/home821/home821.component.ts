import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home821',
  template: `
    <p>
      home821 works!
    </p>

    <input type="text" placeholder="Enter stock (e.g. AAPL)"
          (change)="onChangeEvent($event)">

    <app-order-processor821 [stockSymbol]="stock" [quantity]="numberOfShares">

    </app-order-processor821>
  `,
  styles: [
  ]
})
export class Home821Component implements OnInit {

  stock!: string;
  readonly numberOfShares = 100;

  onChangeEvent({target} :any): void {
    this.stock = target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
