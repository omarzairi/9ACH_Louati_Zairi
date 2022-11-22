import { NgModule } from '@angular/core';

import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
@NgModule({
  declarations: [ProductdetailsComponent],
  imports: [ProductdetailsRoutingModule, SharedModuleModule],
})
export class ProductdetailsModule {}
