import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent85',
  template: `
    <div class="wrapper">
      <p>
        parent85 works!
      </p>
      <div>This div is defined in the Parent's template</div>
      <app-child85>
        <div ><i>Child got this line from parent </i></div>
      </app-child85>
    </div>
  `,
  styles: [`
    .wrapper {background: deeppink;}
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Parent85Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
