import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppResolverService } from './app-resolver.service';
import { CountryNameResolverService } from './country-name-resolver.service';
import { CountrywiseResolverService } from './countrywise-resolver.service';
import { WholeWorldComponent } from './whole-world/whole-world.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'whole-world',
    pathMatch : 'full'
  },
  {
    path : 'whole-world',
    component : WholeWorldComponent,
    resolve : {
      wholeWorld : AppResolverService,
      countriesName : CountryNameResolverService
    }
  },
  {
    path : 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then(m => m.SubscribeModule) 
  },
  {
    path : 'country-wise',
    loadChildren: () => import('./country-wise/country-wise.module').then(m => m.CountryWiseModule),
    resolve : {
      countryWise : CountrywiseResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
