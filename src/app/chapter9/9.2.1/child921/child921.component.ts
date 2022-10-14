import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child921',
  template: `
    <p>
      child921 works!
    </p>
    <p>
      child greeting : {{greeting}} <br>
      child user name : {{user.name}}
    </p>
  `,
  styles: [
  ]
})
export class Child921Component implements OnChanges {

  @Input()
  greeting!: string;

  @Input()
  user!: {name:string};

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
