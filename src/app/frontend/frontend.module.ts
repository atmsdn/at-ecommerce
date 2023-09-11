import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { FullLoaderComponent } from './stacomponents/full-loader/full-loader.component';
import { HeaderComponent } from './stacomponents/header/header.component';
import { CartComponent } from './stacomponents/cart/cart.component';
import { MenuComponent } from './stacomponents/menu/menu.component';
import { ThemeComponent } from './stacomponents/theme/theme.component';
import { MobileMenuComponent } from './stacomponents/mobile-menu/mobile-menu.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    FrontendComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    FullLoaderComponent,
    HeaderComponent,
    MenuComponent,
    ThemeComponent,
    MobileMenuComponent
  ]
})
export class FrontendModule { }
