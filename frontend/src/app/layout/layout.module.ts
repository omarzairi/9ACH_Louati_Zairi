import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { FooterComponent } from '../components/front/footer/footer.component';
import { HeaderComponent } from '../components/front/header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AdminComponent,
    FrontComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule],
})
export class LayoutModule {}
