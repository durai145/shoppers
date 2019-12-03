import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-map-basic',
  templateUrl: './map-basic.component.html',
  styleUrls: ['./map-basic.component.scss']
})
export class MapBasicComponent implements OnInit {
  title = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

}
