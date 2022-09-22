import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      foo works!
      <input id="stock" type="text" >
      <!-- (keyup)="onKeyUp($event)"  -->
    </p>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {


  constructor() { }

  public onKeyUp(event: any) {
    console.log("key : " + event.key);
    console.log("input : " + event.target.value);
    console.log(event);
  }

  ngOnInit(): void {

    const stock = document.getElementById("stock");
    let timeOutId: number;
    
    if( stock != null ){
      stock.addEventListener("keyup", function(event) {
        console.log("helloooooooooooooooo" + timeOutId);
        window.clearTimeout(timeOutId);
        timeOutId = window.setTimeout(function() {
                                console.log("hello");
                                console.log(stock);
                                console.log("key : " + event.key);
                                //if(event.target != null) console.log("input : " + event.target.value);
                                console.log(event);
                                }, 5000);
      }, false);
    }

  }


}
