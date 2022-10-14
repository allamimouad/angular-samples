import { Component } from '@angular/core';
import { delay, from, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  personArray = [{name:"mouad",age:24},{name:"yassine",age:27},{name:"youssra",age:24}];

  constructor(){

    timer(2000,2000).pipe(
      map(element => this.personArray[element])
    )
    .forEach(element => {
      this.title = element.name;
    })
    //setTimeout(() => { this.title = "angular 2" }, 3000)
  }
}
