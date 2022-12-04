import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenshomeRoutingModule } from './menshome-routing.module';

import { MenshomeComponent } from './menshome/menshome.component';

@NgModule({
  declarations: [MenshomeComponent],
  imports: [CommonModule, MenshomeRoutingModule],
})
export class MenshomeModule {}
