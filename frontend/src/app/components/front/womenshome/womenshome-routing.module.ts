import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenshomeComponent } from './womenshome/womenshome.component';

const routes: Routes = [{ path: '', component: WomenshomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomenshomeRoutingModule {}
