import { Component, OnInit } from '@angular/core';
import {CityService } from '../shared/city.service';
import {City  } from '../shared/City';
import { Area } from '../shared/Area';
import {ItemData} from '../shared/ItemData';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css'],
  providers: [CityService]
})
export class SectionOneComponent {
      selectedCity:City =new City(0,'Select');
    selectedArea:Area =new Area(0,0,"Select");
    cities:City[];
    areas: Area[];
    items: ItemData[];

  constructor(private _cityService:CityService) {this.cities=this._cityService.getCity() }
  onSelect(cityid)
  {
    this.areas = this._cityService.getArea().filter((item)=> item.cityid == cityid);
  }
  onSelectArea(areaid)
  {
    this.items = this._cityService.getItem().filter((item)=> item.areaid == areaid );
  }

}
