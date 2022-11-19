import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts!: Product[];
  categId: Number;
  constructor(
    private ProductServ: ProductService,
    private ActiveRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params) => {
      this.categId = params['categid'];
      this.ProductServ.getProductsByCategId(this.categId).subscribe((data) => {
        this.allProducts = data;
      });
    });
  }
}
