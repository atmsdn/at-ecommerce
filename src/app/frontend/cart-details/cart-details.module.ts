import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartDetailsRoutingModule } from './cart-details-routing.module';
import { CartDetailsComponent } from './cart-details.component';


@NgModule({
  declarations: [
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    CartDetailsRoutingModule
  ]
})
export class CartDetailsModule { }
