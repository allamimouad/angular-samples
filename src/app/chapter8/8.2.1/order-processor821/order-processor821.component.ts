import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-processor821',
  template: `
    <p>
      order-processor821 works!
    </p>
    <span *ngIf="!!stockSymbol">
      Buying {{quantity}} shares of {{stockSymbol}}
    </span>
  `,
  styles: [
    `:host {background: cyan;}`
  ]
})
export class OrderProcessor821Component implements OnInit {

  @Input() stockSymbol!: string;
  @Input() quantity!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
