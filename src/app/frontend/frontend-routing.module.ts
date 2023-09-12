import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path: '', component: FrontendComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'category', loadChildren: () => import('./category-details/category-details.module').then(m => m.CategoryDetailsModule) },
      { path: 'products-details', loadChildren: () => import('./products-details/products-details.module').then(m => m.ProductsDetailsModule) },
      { path: 'cart', loadChildren: () => import('./cart-details/cart-details.module').then(m => m.CartDetailsModule) },
      { path: 'checkout', loadChildren: () => import('./checkout-details/checkout-details.module').then(m => m.CheckoutDetailsModule) },
      { path: 'order-success', loadChildren: () => import('./order-success/order-success.module').then(m => m.OrderSuccessModule) },
      { path: 'order-tracking', loadChildren: () => import('./order-tracking/order-tracking.module').then(m => m.OrderTrackingModule) },
      { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
