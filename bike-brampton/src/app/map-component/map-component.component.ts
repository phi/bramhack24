import { Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export class MapComponentComponent {
  ngOnInit():void{
    this.configmap()

    
  }
  map: any;
  configmap(){
    this.map = L.map("map",{
      center:[43.713774, -79.751144],
      zoom:6
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(this.map);

  }
  
}
