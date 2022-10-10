import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Child84Component } from '../child84/child84.component';

@Component({
  selector: 'app-parent84',
  template: `
    <p>
      parent84 works!
    </p>
    <app-child84 name="child1" #child1></app-child84>
    <button (click)="child1.greet()" >Invoke greet() on child 1</button>
    <app-child84 name="child2" #child2></app-child84>
    <button (click)="child2.greet()" >Invoke greet() on child 2</button>

    <button (click)="greetingAllChildren()" >greeting all children</button>
  `,
  styles: [
  ]
})
export class Parent84Component implements OnInit, AfterViewInit {

  @ViewChild('child1') 
  firstChild! : Child84Component;

  @ViewChildren(Child84Component)
  children! : QueryList<Child84Component>;

  constructor() { }

  ngAfterViewInit(): void {
    this.firstChild.greet();
  }

  greetingAllChildren() : void{
    this.children.forEach(child => child.greet());
  }

  ngOnInit(): void {
  }

}
