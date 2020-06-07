import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService implements OnDestroy{
  private _searched: BehaviorSubject<any> = new BehaviorSubject(false)
  public searched:Observable<any> = this._searched.asObservable()

  constructor() { }
  checkSearched(){this._searched.next(true)}

  ngOnDestroy(){
    this._searched.unsubscribe()
  }

}
