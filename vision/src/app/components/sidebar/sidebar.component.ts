import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TensorflowService } from './../../services/tensorflow.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ResizableModule } from 'angular-resizable-element';
import { TrendsapiService } from './../../services/trendsapi.service';
import { DataService } from './../../services/data.service'
import { Component, OnInit, OnDestroy } from '@angular/core';
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
    domain: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
  };

  constructor(private DataService: DataService,
              private SidebarService: SidebarService) {
  }
  byDate: any = []
  private arraybyDate: Subscription
  sliderIndex: number
  private Index: Subscription

  changeDate(date){
    this.single = this.SidebarService.getCountriesData(date.value)
  }

  ngOnInit(): void {
    this.arraybyDate = this.SidebarService.byDate.subscribe((byDate) => this.byDate = byDate)
    this.single = this.SidebarService.getCountriesData(0)
    console.log(this.single)
    this.Index = this.SidebarService.sliderIndex.subscribe((sliderIndex) => this.sliderIndex = sliderIndex)
    console.log('index is' + this.sliderIndex)
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  ngOnDestroy(){
    this.Index.unsubscribe()
    this.arraybyDate.unsubscribe()

  }

}
