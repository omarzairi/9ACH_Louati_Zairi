import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenshopComponent } from './menshop/menshop.component';

const routes: Routes = [{ path: '', component: MenshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenRoutingModule {}
