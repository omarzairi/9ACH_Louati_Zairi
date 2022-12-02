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
  Delete(prod: Product) {
    this.allProducts = this.allProducts.filter((p) => p.id != prod.id);
  }
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
        this.ProductServ.getAllProducts().subscribe((data) => {
          this.allProducts = data;
          this.allProducts.sort((a, b) => this.compare(a.name, b.name));
          this.nbProd = this.allProducts.length;
        });
      }
    });
  }
}
