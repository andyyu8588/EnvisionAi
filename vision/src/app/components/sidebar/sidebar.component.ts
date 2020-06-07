import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TensorflowService } from './../../services/tensorflow.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ResizableModule } from 'angular-resizable-element';
import { TrendsapiService } from './../../services/trendsapi.service';
import { DataService } from './../../services/data.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { defaultData } from './default'
import { SidebarService } from 'src/app/services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{
  single: any[];
  view: any[] = [240,1500]
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private DataService: DataService,
              private SidebarService: SidebarService) {
  }
  byDate: any = []
  private arraybyDate: Subscription

  changeDate(date){
    this.single = this.DataService.getData(date.value)
  }

  ngOnInit(): void {
    this.arraybyDate = this.SidebarService.byDate.subscribe((byDate) => this.byDate = byDate)
    this.byDate = defaultData;
    this.SidebarService._byDate.next(this.byDate)
    console.log(this.byDate)
    this.single = this.DataService.getData(0)
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  ngOnDestroy(){

  }

}
