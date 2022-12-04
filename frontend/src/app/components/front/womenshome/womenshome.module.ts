import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenshomeRoutingModule } from './womenshome-routing.module';
import { WomenshomeComponent } from './womenshome/womenshome.component';


@NgModule({
  declarations: [
    WomenshomeComponent
  ],
  imports: [
    CommonModule,
    WomenshomeRoutingModule
  ]
})
export class WomenshomeModule { }
