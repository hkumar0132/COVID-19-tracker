import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryWiseComponent } from './country-wise.component';
import { CountryWiseRoutingModule } from './country-wise-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CountryWiseComponent],
  imports: [
    CommonModule,
    CountryWiseRoutingModule,
    ChartsModule
  ]
})
export class CountryWiseModule { }
