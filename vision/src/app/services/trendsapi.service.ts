import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendsapiService {

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
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }
}