import { Component, OnInit } from '@angular/core';
import { State832Service } from '../state832.service';

@Component({
  selector: 'app-ebay832',
  template: `
    <p>
      ebay832 works!
    </p>
    <p> the serched item is : {{searched}} </p>
  `,
  styles: [
  ]
})
export class Ebay832Component implements OnInit {

  searched! : string;

  constructor(stateService : State832Service) { 
    stateService.getState().subscribe(
      element => this.searched = element
    )
  }

  ngOnInit(): void {
  }

}
