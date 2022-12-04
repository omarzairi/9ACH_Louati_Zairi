import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts!: Product[];
  filtered!: Product[];
  categId: Number;
  Brands: String[] = [];
  getbybrand: FormGroup;
  constructor(
    private ProductServ: ProductService,
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params) => {
      if (Object.keys(params)[0] == 'search') {
        this.ProductServ.searchProductsByName(params['search']).subscribe(
          (data) => {
            this.filtered = null;
            this.allProducts = data;
            let name = params['search'];
            let spli = name.split(' ');
            if (spli.length >= 2) {
              let i = 0;
              let prods = this.allProducts;
              let bestmatchescount = 0;
              prods?.map((prod) => {
                let nbwords = 0;
                let maxwords = spli.length - 1;
                spli.map((elem) => {
                  if (prod.name.toUpperCase().includes(elem.toUpperCase())) {
                    nbwords++;
                  }
                });
                if (nbwords > maxwords) {
                  maxwords = nbwords;
                  let match = prods[i];
                  bestmatchescount++;
                  prods.splice(i, 1);
                  prods.unshift(match);
                } else {
                  if (nbwords >= maxwords) {
                    let match = prods[i];
                    prods.splice(i, 1);
                    prods.splice(bestmatchescount, 0, match);
                  }
                }
                i++;
              });
              this.allProducts = prods;
            }
            this.filtered = null;
            this.Brands = [];
            this.allProducts.map((prod) => {
              if (this.Brands.indexOf(prod.brandName) == -1) {
                this.Brands.unshift(prod.brandName);
              }
            });
          }
        );
      } else {
        this.categId = params['categid'];
        this.ProductServ.getProductsByCategId(this.categId).subscribe(
          (data) => {
            this.filtered = null;
            this.allProducts = data;
            this.Brands = [];
            data.map((prod) => {
              if (this.Brands.indexOf(prod.brandName) == -1) {
                this.Brands.push(prod.brandName);
              }
            });
          }
        );
      }
    });

    this.getbybrand = this.fb.nonNullable.group({
      brand: [this.Brands[0]],
    });
  }
  getByBrand() {
    this.filtered = this.allProducts.filter(
      (prod) => prod.brandName == this.getbybrand.value['brand']
    );
  }
}
