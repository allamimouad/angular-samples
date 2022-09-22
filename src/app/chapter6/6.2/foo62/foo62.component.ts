import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
      <input type="text" #stockSymbol placeholder="Enter stock" >
    </p>
  `,
  styles: [
  ]
})
export class Foo62Component implements AfterViewInit {

  @ViewChild('stockSymbol') myInputField! : ElementRef;

  constructor() { }

  getStockQuoteFromServer(stock : string) : void {
    console.log(`The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`);
  }

  ngAfterViewInit(): void {
    
    let keyup$ = fromEvent(this.myInputField.nativeElement,'keyup');

    let keyupvalue$ = keyup$
                          .pipe(
                                debounceTime(3000),
                                map((event:any) => event['target'].value)
                          )
                          .subscribe(stock => this.getStockQuoteFromServer(stock));
    
  }

}
