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
      if (Object.keys(params)[0] == 'search') {
        this.ProductServ.searchProductsByName(params['search']).subscribe(
          (data) => {
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
          }
        );
      } else {
        this.categId = params['categid'];
        this.ProductServ.getProductsByCategId(this.categId).subscribe(
          (data) => {
            this.allProducts = data;
          }
        );
      }
    });
  }
}
