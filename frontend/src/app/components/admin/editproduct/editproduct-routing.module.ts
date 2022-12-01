import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [{ path: '', component: EditproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditproductRoutingModule {}
