import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from "src/assets/url";

@Injectable({
  providedIn: 'root'
})
export class CovidInfoService {

  constructor(private httpClient : HttpClient) { }

  country : string = "India";

  url = new Url();

  //Returns list of countries
  public getCountryList() {
    
    try{
      return this.httpClient.get(this.url.countryList);
    }
    catch(err) {
      alert('Error getting result : ' + err);
    }
  }

  //Returns data wrt entire world
  public getWholeWorldData() {

    try {
      return this.httpClient.get(this.url.wholeWorld);
    }
    catch(err) {
      alert('Error getting result : ' + err);
    }

  }

  //Returns data specific to a country
  public getCountryWiseData() {

    try {
      return this.httpClient.get(this.url.countryWise + this.country);
    }
    catch(err) {
      alert('Error getting result : ' + err);
    }
  }

}
