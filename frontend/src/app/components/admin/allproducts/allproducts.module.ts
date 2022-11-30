import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllproductsRoutingModule } from './allproducts-routing.module';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AppModule } from '../../../app.module';
import { AdminproductComponent } from '../adminproduct/adminproduct.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AllproductsComponent, AdminproductComponent],
  imports: [CommonModule, AllproductsRoutingModule, NgxPaginationModule],
})
export class AllproductsModule {}
