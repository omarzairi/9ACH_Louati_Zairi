import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditproductRoutingModule } from './editproduct-routing.module';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditproductComponent],
  imports: [CommonModule, EditproductRoutingModule, ReactiveFormsModule],
})
export class EditproductModule {}
