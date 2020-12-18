import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WholeWorldComponent } from './whole-world/whole-world.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CovidInfoService } from './covid-info.service';
import { FormsModule } from '@angular/forms';
import { AppResolverService } from './app-resolver.service';
import { CountryNameResolverService } from './country-name-resolver.service';
import { CountrywiseResolverService } from './countrywise-resolver.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WholeWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CovidInfoService, AppResolverService, 
              CountryNameResolverService, CountrywiseResolverService,
              MessageService],

  bootstrap: [AppComponent]
})

export class AppModule { }
