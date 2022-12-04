import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenshopComponent } from './menshop/menshop.component';

const routes: Routes = [
  {
    path: '',
    component: MenshopComponent,
    children: [
      {
        path: ':categ/cat/:categid',
        loadChildren: () =>
          import('../product-list-mod/product-list-mod.module').then(
            (module) => module.ProductListModModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('../menshome/menshome.module').then(
            (module) => module.MenshomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenRoutingModule {}
