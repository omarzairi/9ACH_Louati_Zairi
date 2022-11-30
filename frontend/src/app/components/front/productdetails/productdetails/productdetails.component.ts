import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';
import { Review } from 'src/app/review';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  review: FormGroup;
  prodid: Number;
  product: Product;
  mainimg: String;
  name: String;
  rev: Review;
  comments: Review[];

  immain(img: String) {
    this.mainimg = img;
  }
  getdate(d: Date) {
    return new Date(d);
  }

  addReview() {
    this.rev = new Review(
      this.review.value['rate'],
      localStorage.getItem('username'),
      this.review.value['comment'],
      new Date()
    );
    this.prodserv.addComment(this.prodid, this.rev).subscribe(
      (product) => {
        console.log(product);
        this.comments.unshift(this.rev);
      },
      (err: HttpErrorResponse) => console.log(err)
    );
  }
  constructor(
    private ActiveRoute: ActivatedRoute,
    private prodserv: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params) => {
      this.prodid = params['id'];
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
        this.comments = product[0].comments;
      });
    });
    this.review = this.fb.nonNullable.group({
      rate: [''],
      comment: [''],
    });
  }
}
