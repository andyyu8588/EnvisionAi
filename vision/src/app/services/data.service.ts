import { Injectable, OnDestroy } from '@angular/core';
import { SidebarService } from  './sidebar.service'
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy{
  byDate: any = []
  private arraybyDate: Subscription

  constructor(private sidebarService: SidebarService) { }

  getData(i){
    /*
    gets data by indexing with week of the year
    */
    this.arraybyDate = this.sidebarService.byDate.subscribe((byDate)=>this.byDate = byDate)
    return (this.byDate)[i]
  }

  ngOnDestroy() {
    this.byDate.unsubscribe()
  }
}
