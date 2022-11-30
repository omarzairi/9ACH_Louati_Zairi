import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
@NgModule({
  declarations: [ProductdetailsComponent],
  imports: [
    ProductdetailsRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
  ],
})
export class ProductdetailsModule {}
