import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State832Service } from '../state832.service';

@Component({
  selector: 'app-search832',
  template: `
    <input type="text" [formControl] = "searchInput" >
  `,
  styles: [
  ]
})
export class Search832Component implements OnInit {

  searchInput : FormControl = new FormControl('');

  constructor(stateService : State832Service) { 
    this.searchInput.valueChanges.subscribe(element => stateService.searchCriteria = element);
  }

  ngOnInit(): void {
  }

}
