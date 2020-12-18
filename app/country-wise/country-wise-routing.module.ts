import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryWiseComponent } from './country-wise.component';


const routes: Routes = [
  {
    path: '',
    component: CountryWiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryWiseRoutingModule { }