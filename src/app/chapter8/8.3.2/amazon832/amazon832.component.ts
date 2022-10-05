import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State832Service } from '../state832.service';

@Component({
  selector: 'app-amazon832',
  template: `
    <p>
      amazon832 works!
    </p>
    <p> current serched element is : {{ search$ | async }} </p>
  `,
  styles: [
  ]
})
export class Amazon832Component implements OnInit {

  search$! : Observable<string>;

  constructor(stateService : State832Service) { 
    this.search$ = stateService.getState();
  }

  ngOnInit(): void {
  }

}
