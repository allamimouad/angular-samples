import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class State832Service {

  private stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

  public set searchCriteria(value : string){
    this.stateSubject.next(value);
  }

  public getState() : Observable<string>{
    return this.stateSubject.asObservable();
  }

  constructor() { }
}
