import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendsapiService implements OnDestroy {
  // observables for tf service
  private _receivedData: BehaviorSubject<any> = new BehaviorSubject('')
  public receivedData: Observable<any> = this._receivedData.asObservable()

  constructor(private http: HttpClient) { 
    
  }  

  // params must be an object with {
  //  keyword: keyword (string)
  //  year: year (string or number)
  // }
  getData(params: any) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.backend.trendsapi, {
        params 
      }).subscribe((res) => {
        this._receivedData.next(res)
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  ngOnDestroy() {

  }
}