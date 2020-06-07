import { Injectable, OnDestroy } from '@angular/core';
import{ data } from './../components/sidebar/data.model'
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { defaultData } from './default'
import { originalDefaultData } from './originaldefault'

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnDestroy{

  private originalArray:any = originalDefaultData
  private _original: BehaviorSubject<any> = new BehaviorSubject(this.originalArray)
  public original: Observable<any> = this._original.asObservable()

  private byDateArray: Array<data[]> = defaultData
  private _byDate: BehaviorSubject<any> = new BehaviorSubject(this.byDateArray)
  public byDate: Observable<any> = this._byDate.asObservable()

  private sendData: Array<any> = []
  public _sentData: BehaviorSubject<any> = new BehaviorSubject(this.sendData)
  public sentData: Observable<any> = this._sentData.asObservable()

  private Index: number = 0
  private _sliderIndex: BehaviorSubject<any> = new BehaviorSubject(this.Index)
  public sliderIndex: Observable<any> = this._sliderIndex.asObservable()

  private isLoading: boolean
  private _Loading: BehaviorSubject<any> = new BehaviorSubject(this.isLoading)
  public Loading: Observable<any> = this._Loading.asObservable()


  saveOriginal(data):any{
    this._original.next(data)
  }
  setLoading(data: boolean): any{
    this._Loading.next(data)
  }
  saveByDate(data):any{
    this._byDate.next(data)
  }
  parseSendData(event){
    let analysis = [];
    let originalData = {name: event, series: []}
    this._original.value.data.forEach((country) => {
      if (country.name == event) {
          for (let i = 0; i < 52; i++) {
            originalData.series.push({
              name: i.toString(),
              date: country.data[i].date,
              query: country.data[i].query,
              value: country.data[i].value
            })
          }
      }
    });
    analysis.push(originalData)
    this._sentData.next(analysis)
  }

  parseCountries(_countries):any{
    let parsedData = [];
    for (var i = 0; i< (_countries.data)[0].data.length; i++){
     let parsedDay = [];
      (_countries.data).forEach(country => {
        if ((country.data)[i] && (country.data)[i].name !='Global'){
        parsedDay.push((country.data)[i])
        }});
        parsedData.push(parsedDay)

      }
    this._byDate.next(parsedData)
    }
  // parseCases()
  getCountriesData(index):any{
    this._sliderIndex.next(index)
  }

  ngOnDestroy() {
    this._byDate.unsubscribe()
    this._sliderIndex.unsubscribe()
    this._original.unsubscribe()
    this._Loading.unsubscribe()
    this._sentData.unsubscribe()
  }

}
