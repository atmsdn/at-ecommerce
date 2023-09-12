import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderTrackingRoutingModule } from './order-tracking-routing.module';
import { OrderTrackingComponent } from './order-tracking.component';


@NgModule({
  declarations: [
    OrderTrackingComponent
  ],
  imports: [
    CommonModule,
    OrderTrackingRoutingModule
  ]
})
export class OrderTrackingModule { }
