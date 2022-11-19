import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/front/header/header.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { HomepageComponent } from './components/front/homepage/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListModModule } from './components/front/product-list-mod/product-list-mod.module';
import { ProductComponent } from './components/front/product/product.component';
import { ProductListComponent } from './components/front/product-list-mod/product-list/product-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SoldePipe } from './solde.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    ProductListComponent,
    SoldePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatGridListModule,
    ProductListModModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
