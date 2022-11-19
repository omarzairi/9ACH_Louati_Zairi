import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WomenshopComponent } from './womenshop/womenshop.component';

const routes: Routes = [
  {
    path: '',
    component: WomenshopComponent,
    children: [
      {
        path: ':categ/cat/:categid',
        loadChildren: () =>
          import('../product-list-mod/product-list-mod.module').then(
            (module) => module.ProductListModModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenRoutingModule {}
