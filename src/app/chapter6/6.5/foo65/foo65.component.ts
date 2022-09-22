import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-foo65',
  template: `
    <p>
      foo65 works!
    </p>
    <p *ngIf="person$ | async as person" > {{person.age}} </p>
    <ul>
        <!-- <li *ngFor="let numberVar of number$ | async" > 
            {{numberVar}}
        </li> -->
    </ul>
  `,
  styles: [
  ]
})
export class Foo65Component implements OnInit {

    person$ : Observable<any>;

    constructor() { 
        this.person$ = of({
                            name:"mouad",
                            age:24,
                            country : "morocco"

                        })
                        .pipe(
                                    
                                    //take(10)
                                );
   }

  ngOnInit(): void {
  }

}
