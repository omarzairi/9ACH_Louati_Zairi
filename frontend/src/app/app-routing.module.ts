import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/front/product-list-mod/product-list/product-list.component';
import { AdminguardGuard } from './guards/adminguard.guard';
import { ProfileguardGuard } from './guards/profileguard.guard';

import { AdminComponent } from './layout/admin/admin.component';
import { AuthAdminComponent } from './layout/auth-admin/auth-admin.component';
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
        canActivate: [ProfileguardGuard],
        loadChildren: () =>
          import('./components/front/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'cart',
        canActivate: [ProfileguardGuard],
        loadChildren: () =>
          import('./components/front/cart/cart.module').then(
            (module) => module.CartModule
          ),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminguardGuard],
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
        path: 'allclients',
        loadChildren: () =>
          import('./components/admin/clients/clients.module').then(
            (module) => module.ClientsModule
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
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/admin/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'editproduct/:id',
        loadChildren: () =>
          import('./components/admin/editproduct/editproduct.module').then(
            (module) => module.EditproductModule
          ),
      },
    ],
  },
  { path: 'admin/login', component: AuthAdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
