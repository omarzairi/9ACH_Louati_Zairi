import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  mainimg: String;
  name: String;
  immain(img: String) {
    this.mainimg = img;
  }
  getdate(d) {
    return new Date(d);
  }
  constructor(
    private ActiveRoute: ActivatedRoute,
    private prodserv: ProductService
  ) {}

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params) => {
      this.prodserv.getProductById(params['id']).subscribe((product) => {
        if (String(product[0].id).length != 10) {
          let t = product[0].media[0].img.slice(
            0,
            product[0].media[0].img.indexOf(product[0].id + '-1-') +
              String(product[0].id).length
          );

          product[0].media[1].img = t + '-2';
          product[0].media[2].img = t + '-3';
          product[0].media[3].img = t + '-4';
        }
        product[0].media.map((img) => {
          img.img = img.img + '?$n_240w$&wid=3000&fit=constrain';
        });
        this.product = product[0];
        this.name = product[0].name;
        this.mainimg = product[0].media[0].img;
      });
    });
  }
}
