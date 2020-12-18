import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CovidInfoService } from './covid-info.service';

@Injectable({
  providedIn: 'root'
})
export class CountryNameResolverService implements Resolve<any> {

  constructor(private covidInfo : CovidInfoService) { }

  resolve() {
     return this.covidInfo.getCountryList(); 
  }

}
