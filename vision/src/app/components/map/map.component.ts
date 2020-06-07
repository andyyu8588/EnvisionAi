import { environment } from './../../../environments/environment.prod';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl'
import { MapService } from 'src/app/services/map.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Mapboxgl.Map
  @ViewChildren('slider') slider : any
  @ViewChildren('sliderValue') sliderValue : any

  constructor() { }

  ngOnInit(): void {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapbox.token,
      container: 'mapbox', // container id
      style: 'mapbox://styles/travelnet/ckb47dkvn0dh31ila3aizjqlt',
      center: [-71.22, 46.85], // starting position
      zoom: 2, // starting zoom
    })

    
  }

  onInputChange(event) {
    
    this.map.setPaintProperty(
      'ca',
      'raster-opacity',
      10
    );
  }
}