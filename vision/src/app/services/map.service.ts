import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl'


@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: Mapboxgl.Map
  constructor() {

  }

  buildMap() {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapbox.token,
      container: 'mapbox', // container id
      style: 'mapbox://styles/travelnet/ck99afyp80hhu1iqrodjf1brl',
      center: [-71.22, 46.85], // starting position
      zoom: 2, // starting zoom
    })
  }
}
