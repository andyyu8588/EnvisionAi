import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterContentInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Mapboxgl.Map

  // week of the year
  sliderValue: number
  sliderValueSubscription: Subscription

  // array of 52 arrays of weeks
  byDate: Array<any>
  byDateSubscription: Subscription

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    // init map
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapbox.token,
      container: 'mapbox', // container id
      style: 'mapbox://styles/travelnet/ckb47dkvn0dh31ila3aizjqlt', // map style
      center: [-71.22, 46.85], // starting position
      zoom: 2, // starting zoom
    })

    // subscribe to data and slider
    this.byDateSubscription = this.sidebarService.byDate.subscribe((byDate) => {
      let temp = this.byDate
      this.byDate = byDate
      if (JSON.stringify(temp) != JSON.stringify(this.byDate) && temp) { // colorMap again if new search comes
        this.colorMap()
      }
    })
    this.byDateSubscription = this.sidebarService.sliderIndex.subscribe((sliderIndex) => {
      let temp = this.sliderValue
      this.sliderValue = sliderIndex
      if (temp != this.sliderValue && sliderIndex != 0) { // colorMap again if sliderValue changes
        this.colorMap()
      }
    })
  }

  // colors the map
  colorMap() {
    this.byDate[this.sliderValue].forEach((element) => {
      let country = element.name // get country name, then convert to lower case since mapbox layers are in lower case
      let value = element.value / 100 // opcaity level
      this.map.setPaintProperty(
        country.toLowerCase(),
        'fill-opacity',
        value
      )
    });
  }

  // unsubscribe
  ngOnDestroy() {
    this.byDateSubscription.unsubscribe()
    this.sliderValueSubscription.unsubscribe()
  }
}