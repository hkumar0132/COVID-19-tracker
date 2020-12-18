import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidInfoService } from '../covid-info.service';
import { ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-country-wise',
  templateUrl: './country-wise.component.html',
  styleUrls: ['./country-wise.component.css']
})

export class CountryWiseComponent implements OnInit {

  constructor(private covidInfo : CovidInfoService, private route : ActivatedRoute) { }

  data : any = {};
  countryName : string = "";

  error : Boolean = false;
  confirmed : number;
  deaths : number;
  recovered : number;
  active : number;

  type : Array<string> = ['line', 'bar', 'doughnut', 'pie', 'radar'];

  chartData : ChartDataSets[] = [];


  chartOptions : ChartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                fontSize: 15,
                fontStyle : 'bold'
            }
        }]
    },
    legend: {
      labels: {
          fontSize : 18,
          fontStyle : 'bold'
      }
    },
  }

  chartLabels : Label = ["Confirmed", 'Active', "Deaths", "Recovered"];

  chartColors : Color[] = [
    {        
      backgroundColor : [
        '#A93226',
        '#F39C12',
        '#839192',
        '#229954'
      ],
      borderWidth : 0
    }
  ];
  
  lineColors : Color[] = [
    {        
      backgroundColor : '#A93226'
    }
  ];

  // bar, bubble, pie, radar, doughnut

  line : ChartType = 'line'; 
  bar : ChartType = 'bar'; 
  doughnut : ChartType = 'doughnut'; 
  pie : ChartType = 'pie'; 

  ngOnInit() {

    this.data = this.route.snapshot.data['countryWise'];
    this.countryName = this.covidInfo.country;
    
    if(this.data.length == 0) {
      this.error = true;
      return;
    }

    for(let data of this.data) {
      this.confirmed = data.Confirmed;
      this.active = data.Active;
      this.deaths = data.Deaths;
      this.recovered = data.Recovered;
    }

    this.chartData = [
      { 
        data : [
          this.confirmed,
          this.active,
          this.deaths,
          this.recovered
        ],
        label : this.countryName
      }
    ];
    
  }
  
  exportAsPDF(id : string) {
    let data = document.getElementById(id);  
    html2canvas(data).then(canvas => { 
  
      const contentDataURL = canvas.toDataURL('image/pdf') ;
      let pdf = new jspdf('p', 'mm', 'a4'); 
      
      pdf.addImage(contentDataURL, 'pdf', 0, 0);
      pdf.save(id + '_' + this.countryName + '.pdf'); 
    }); 
  }

}

