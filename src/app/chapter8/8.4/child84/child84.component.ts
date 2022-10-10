import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child84',
  template: `
    <p>
      child84 works!
    </p>
  `,
  styles: [
  ]
})
export class Child84Component implements OnInit {

  @Input()
  name!: string;

  constructor() { }

  public greet(){
    console.log("child greet function is saying hello");
    console.log("child name : " + this.name);
  }

  ngOnInit(): void {
  }

}
