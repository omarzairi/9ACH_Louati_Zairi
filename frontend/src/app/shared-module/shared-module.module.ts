import { NgModule } from '@angular/core';
import { SoldePipe } from '../solde.pipe';
import { CommonModule } from '@angular/common';
import { DaysPipe } from '../days.pipe';
@NgModule({
  declarations: [SoldePipe, DaysPipe],
  exports: [SoldePipe, CommonModule, DaysPipe],
})
export class SharedModuleModule {}
