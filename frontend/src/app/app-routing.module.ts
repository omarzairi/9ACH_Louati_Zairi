import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/front/product-list-mod/product-list/product-list.component';

import { AdminComponent } from './layout/admin/admin.component';
import { FrontComponent } from './layout/front/front.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/front/homepage/homepage.module').then(
            (module) => module.HomepageModule
          ),
      },
      {
        path: 'men',

        loadChildren: () =>
          import('./components/front/men/men.module').then(
            (module) => module.MenModule
          ),
      },
      {
        path: 'women',
        loadChildren: () =>
          import('./components/front/women/women.module').then(
            (module) => module.WomenModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import(
            './components/front/productdetails/productdetails.module'
          ).then((module) => module.ProductdetailsModule),
      },
      {
        path: 'search/:search',
        component: ProductListComponent,
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./components/front/loginuser/loginuser.module').then(
            (module) => module.LoginuserModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./components/front/register/register.module').then(
            (module) => module.RegisterModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/front/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/admin/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/admin/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: 'allproducts',
        loadChildren: () =>
          import('./components/admin/allproducts/allproducts.module').then(
            (module) => module.AllproductsModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./components/admin/loginadmin/loginadmin.module').then(
            (module) => module.LoginadminModule
          ),
      },
      {
        path: 'search/:search',
        loadChildren: () =>
          import('./components/admin/allproducts/allproducts.module').then(
            (module) => module.AllproductsModule
          ),
      },
      {
        path: 'addproduct',
        loadChildren: () =>
          import('./components/admin/addproduct/addproduct.module').then(
            (module) => module.AddproductModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
