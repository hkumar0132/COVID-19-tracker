import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidInfoService } from '../covid-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-whole-world',
  templateUrl: './whole-world.component.html',
  styleUrls: ['./whole-world.component.css']
})
export class WholeWorldComponent implements OnInit {

  constructor(private covidInfo : CovidInfoService, private router : Router, 
              private route: ActivatedRoute) { }

  worldData = [];
  countryList = [];
  countries : Array<string> = [];

  type : Array<ChartType> = ['bar', 'line', 'doughnut', 'pie'];

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

  chartLabels : Label = ['Confirmed', 'Deaths', 'Recovered'];

  chartColors : Color[] = [
    {        
      backgroundColor : [
        '#A93226',
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
  
  // bar, line, bubble, pie, radar, doughnut

  bar : ChartType = 'bar';   
  line : ChartType = 'line'; 
  doughnut : ChartType = 'doughnut'; 
  pie : ChartType = 'pie'; 

  ngOnInit() {
    
    this.worldData = this.route.snapshot.data['wholeWorld'];
    this.countryList = this.route.snapshot.data['countriesName'];

    this.chartData = [
      { 
        data : [
          this.worldData['TotalConfirmed'],
          this.worldData['TotalDeaths'],
          this.worldData['TotalRecovered']
        ],
        label : 'Total cases around the globe',
      }];

      for(var i = 0; i < this.countryList.length; i++) {
        this.countries.push(this.countryList[i].Country);
      }

  }

  showData(event : any) {
    
    this.covidInfo.country = this.countryList[event.target.value].Slug;
    this.router.navigate(['country-wise']);
  }

  exportAsPDF(id : string) {
    let data = document.getElementById(id);  
    html2canvas(data).then(canvas => {
  
      const contentDataURL = canvas.toDataURL('image/pdf')  
      let pdf = new jspdf('p', 'mm', 'a4'); 
      pdf.addImage(contentDataURL, 'pdf', 0, 0);
      pdf.save(id + '.pdf'); // Generated PDF  
    }); 

  }
  
}
