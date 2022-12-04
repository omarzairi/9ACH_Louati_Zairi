import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenshomeComponent } from './menshome/menshome.component';

const routes: Routes = [{ path: '', component: MenshomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenshomeRoutingModule {}
