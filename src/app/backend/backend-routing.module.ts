import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend.component';

const routes: Routes = [
  {
    path: '', component: BackendComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
