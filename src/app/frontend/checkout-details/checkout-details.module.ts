import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutDetailsRoutingModule } from './checkout-details-routing.module';
import { CheckoutDetailsComponent } from './checkout-details.component';


@NgModule({
  declarations: [
    CheckoutDetailsComponent
  ],
  imports: [
    CommonModule,
    CheckoutDetailsRoutingModule
  ]
})
export class CheckoutDetailsModule { }
