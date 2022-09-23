import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-resize-foo712',
  template: `
    <p>
      resize-foo712 works!
    </p>
    <p *ngIf=" this.media.isActive('md') " > you can see me cause your screen is medium </p>
  `,
  styles: [
  ]
})
export class ResizeFoo712Component implements OnInit {

  //showExtras$: Observable<boolean>;

  constructor(public media : MediaObserver) { 

    /* this.showExtras$ = this.media.asObservable()
              .pipe( map( mediaChanges => {
                    console.log(mediaChanges)
                    return mediaChanges.map(mediaChange => mediaChange.mqAlias).includes('md');
              })) */

  }

  ngOnInit(): void {
  }

}
