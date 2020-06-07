import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TensorflowService } from './../../services/tensorflow.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ResizableModule } from 'angular-resizable-element';
import { TrendsapiService } from './../../services/trendsapi.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{
  select = false
  view:any[]=[window.innerWidth*0.50,window.innerHeight*.80]
  single: Array<{[key: string]: any}>;
  data: Array<{[key: string]: any}>;
  viewValue=true
  predictions: any

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

  constructor(private SidebarService: SidebarService, private tensorflowService: TensorflowService) {
  }
  byDate: any = []
  private arraybyDate: Subscription

  original:any = []
  private arrayOriginal:Subscription

  loading: boolean
  private isLoading:Subscription

  sliderIndex: number = 0
  private Index: Subscription

  sentData: any = []
  private dataSent: Subscription

  changeDate(date){
    this.single = this.byDate[this.sliderIndex]
    this.SidebarService.getCountriesData(date.value)
  }
  changeView(){
    this.viewValue = !this.viewValue
    console.log(this.viewValue)
  }

  ngOnInit(): void {
    this.arraybyDate = this.SidebarService.byDate.subscribe((byDate) => {
      this.byDate = byDate
      this.single = this.byDate[0]
    })
    this.isLoading = this.SidebarService.Loading.subscribe((loading) => this.loading = loading)
    this.SidebarService.saveByDate(this.byDate)

    this.single = this.byDate[0]
    this.Index = this.SidebarService.sliderIndex.subscribe((sliderIndex) => this.sliderIndex = sliderIndex)

    this.arrayOriginal = this.SidebarService.original.subscribe((original) => {
      this.original = original
    })
    this.SidebarService.saveOriginal(this.original)

    this.dataSent= this.SidebarService.sentData.subscribe((sentData) =>{
      this.sentData = sentData
      this.data = this.sentData
    })
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  changeSelect() {
    this.select = false
  }

  selected(event){
    this. select = true
    if (typeof(event)=="string"){
      this.SidebarService.parseSendData(event)
    }
    else {
      this.SidebarService.parseSendData(event.name)
    }
    console.log(this.sentData)
  }

  checkLoading() {
    return this.loading
  }

  ngOnDestroy(){
    this.Index.unsubscribe()
    this.arraybyDate.unsubscribe()
    this.arrayOriginal.unsubscribe()
    this.isLoading.unsubscribe()
    this.dataSent.unsubscribe()
  }

  onAnalyze() {
    let sampleData = [10, 20, 15]

    let predictedData = [{
      name: 'CA',
      series: []
    }]
    
    for (let i = 0; i < 3; i++) {
      let week = 51 + i + 1
      predictedData[0].series.push({
        name: week.toString(),
        value: sampleData[i]
      })
    }

    this.sentData[0].series.reverse()

    this.sentData[0].series.forEach(element => {
      predictedData[0].series.unshift(element)
    });

    console.log(predictedData)

    this.SidebarService._sentData.next(predictedData)
  }
}
