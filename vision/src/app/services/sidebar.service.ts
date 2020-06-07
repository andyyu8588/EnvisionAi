import { Injectable, OnDestroy } from '@angular/core';
import { CountriesModel } from './../components/sidebar/countries.model'
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { defaultData } from './default'

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnDestroy{

  private byDateArray: Array<any> = defaultData
  private _byDate: BehaviorSubject<any> = new BehaviorSubject(this.byDateArray)
  public byDate: Observable<any> = this._byDate.asObservable()
  constructor(){}

  private Index: number
  private _sliderIndex: BehaviorSubject<any> = new BehaviorSubject(this.Index)
  public sliderIndex: Observable<any> = this._sliderIndex.asObservable()

  parseCountries(_countries):any{
    let parsedData = [];
    for (var i = 0; i< (_countries.data)[0].data.length; i++){
     let parsedDay = [];
      (_countries.data).forEach(country => {
        if ((country.data)[i] && (country.data)[i].name !='Global' && (country.data)[i].value){
        parsedDay.push((country.data)[i])
        }});
        parsedData.push(parsedDay)

      }
    console.log(parsedData)
    this._byDate.next(parsedData)
    }
  getCountriesData(index):any{
        /*
    gets data by indexing with week of the year
    */
    this._sliderIndex.next(index)
    return (this.byDateArray)[index]
  }

  ngOnDestroy() {
    this._byDate.unsubscribe()
    this._sliderIndex.unsubscribe()
  }

}
