import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  allProducts!: Product[];
  nbProd: Number;
  page: Number = 1;
  constructor(
    private ProductServ: ProductService,
    private ActiveRoute: ActivatedRoute
  ) {}
  compare = (a: String, b: String) => (a > b ? 1 : -1);
  ngOnInit(): void {
    this.ProductServ.getAllProducts().subscribe((data) => {
      this.allProducts = data;
      this.allProducts.sort((a, b) => this.compare(a.name, b.name));
      this.nbProd = this.allProducts.length;
    });
  }
}
