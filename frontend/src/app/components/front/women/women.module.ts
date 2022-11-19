import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenshopComponent } from './womenshop/womenshop.component';
import { ProductListModModule } from '../product-list-mod/product-list-mod.module';

@NgModule({
  declarations: [WomenshopComponent],
  imports: [CommonModule, WomenRoutingModule, ProductListModModule],
})
export class WomenModule {}
