import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CovidInfoService } from './covid-info.service';

@Injectable({
  providedIn: 'root'
})
export class CountrywiseResolverService implements Resolve<any> {

  constructor(private covidInfo : CovidInfoService) { }

  resolve() {
     return this.covidInfo.getCountryWiseData(); 
  }

}
