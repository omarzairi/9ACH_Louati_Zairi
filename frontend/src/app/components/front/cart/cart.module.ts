import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartitemComponent } from '../cartitem/cartitem.component';

@NgModule({
  declarations: [CartComponent, CartitemComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
