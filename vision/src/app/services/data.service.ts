import { Injectable } from '@angular/core';
import { SidebarService } from  './sidebar.service'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  byDate: any = []
  private arraybyDate: Subscription

  constructor(private sidebarService: SidebarService) { }

  getData(i){
  this.arraybyDate = this.sidebarService.byDate.subscribe((byDate)=>this.byDate = byDate)
  // console.log(this.arraybyDate)
  return (this.arraybyDate)[i]
  }
}
