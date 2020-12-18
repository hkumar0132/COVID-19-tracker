import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { SubscribeRoutingModule } from './subscribe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubscribeModule { }
