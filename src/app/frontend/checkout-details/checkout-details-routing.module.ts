import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutDetailsComponent } from './checkout-details.component';

const routes: Routes = [{ path: '', component: CheckoutDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutDetailsRoutingModule { }
