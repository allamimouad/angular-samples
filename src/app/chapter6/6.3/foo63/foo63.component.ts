import { AfterViewInit, Component, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
      <input type="text" placeholder="Enter stock" [formControl]="searchInput" >
    </p>
  `,
  styles: [
  ]
})
export class Foo63Component implements AfterViewInit {

  searchInput = new FormControl('');

  constructor() {

    this.searchInput.valueChanges
                        .pipe(
                          debounceTime(3000)
                        ).subscribe(stock => this.getStockQuoteFromServer(stock));

   }

  getStockQuoteFromServer(stock : string | null) : void {
    console.log(`The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`);
  }

  ngAfterViewInit(): void {
    
  }

}
