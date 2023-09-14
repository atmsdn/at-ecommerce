import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerBottomOfferComponent } from '../stacomponents/banner-bottom-offer/banner-bottom-offer.component';
import { TimerComponent } from '../stacomponents/timer/timer.component';
import { ProductOptionComponent } from '../stacomponents/product-option/product-option.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerBottomOfferComponent,
    TimerComponent,
    ProductOptionComponent
  ]
})
export class HomeModule { }
