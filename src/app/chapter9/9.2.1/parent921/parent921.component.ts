import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent921',
  template: `
    <p>
      parent921 works!
    </p>
    <div>
      <span>greeting</span><input type="text" [(ngModel)]="greeting" ><br>
      <span>user name</span><input type="text" [(ngModel)]="user.name" >
    </div>
    <p>
      parent greeting : {{greeting}} <br>
      parent user name : {{user.name}}
    </p>
    <app-child921 [greeting]="greeting" [user]="user" ></app-child921>
  `,
  styles: [
  ]
})
export class Parent921Component implements OnInit {

  greeting: string = "hello";
  user: {name:string} = {name: "mouad"};

  constructor() { }

  ngOnInit(): void {
  }

}
