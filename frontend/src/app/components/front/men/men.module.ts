import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { MenshopComponent } from './menshop/menshop.component';

@NgModule({
  declarations: [MenshopComponent],
  imports: [CommonModule, MenRoutingModule],
})
export class MenModule {}
