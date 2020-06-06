import { Injectable, OnDestroy } from '@angular/core';
import { CountriesModel } from './../components/sidebar/countries.model'
import { BehaviorSubject, Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnDestroy{
  private CountriesArray: Array<CountriesModel> = []
  private _countries: BehaviorSubject<any> = new BehaviorSubject(this.CountriesArray)
  public countries: Observable<any> = this._countries.asObservable()

  private byDateArray: Array<CountriesModel> = []
  private _byDate: BehaviorSubject<any> = new BehaviorSubject(this.byDateArray)
  public byDate: Observable<any> = this._byDate.asObservable()
  constructor(){}

  parseCountries(_countries):any{
    let parsedData = []
    for (var i = 0; i< _countries[0].data.length; i++){
    _countries.forEach(country => {
      parsedData.push[country[i]]
    }
    );
    this._byDate.next(parsedData)
  }}
  getCountriesData(_byDate, index ):any{
    return _byDate[index]
  }

  ngOnDestroy() {
    this._byDate.unsubscribe()
    this._countries.unsubscribe()
  }

}
