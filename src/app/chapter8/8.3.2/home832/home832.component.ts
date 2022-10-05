import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home832',
  template: `

    
    <p>
      home832 works!
    </p>

    <app-search832></app-search832> <b> <== search Component </b>

    <br>

    <a [routerLink]="['/']">Ebay</a>
    <a [routerLink]="['/amazon']">Amazon</a>
    
    <router-outlet></router-outlet>
    
  `,
styles: [`
    :host{
      background:yellow;
      display:block;
    }
`]
})
export class Home832Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
