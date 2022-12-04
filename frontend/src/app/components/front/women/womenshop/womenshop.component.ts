import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-womenshop',
  templateUrl: './womenshop.component.html',
  styleUrls: ['./womenshop.component.css'],
})
export class WomenshopComponent implements OnInit {
  women: Boolean;
  categs = {
    sale: false,
    new: false,
    shoes: false,
    cj: false,
    dresses: false,
    jeans: false,
    sportswear: false,
    accessoires: false,
    fb: false,
  };
  constructor(
    private ActiveRoute: ActivatedRoute,
    private prod: ProductService
  ) {}

  sale() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: true,
      new: false,
      shoes: false,
      cj: false,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  newin() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: true,
      shoes: false,
      cj: false,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  cj() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      shoes: false,
      cj: true,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  dresses() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      shoes: false,
      cj: false,
      dresses: true,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  jeans() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      shoes: false,
      cj: false,
      dresses: false,
      jeans: true,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  sportswear() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      shoes: false,
      cj: false,
      dresses: false,
      jeans: false,
      sportswear: true,
      accessoires: false,
      fb: false,
    };
  }
  accessoires() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      shoes: false,
      cj: false,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: true,
      fb: false,
    };
  }
  fb() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      cj: false,
      shoes: false,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: true,
    };
  }
  shoes() {
    this.prod.women = true;
    this.women = this.prod.women;
    this.categs = {
      sale: false,
      new: false,
      cj: false,
      shoes: true,
      dresses: false,
      jeans: false,
      sportswear: false,
      accessoires: false,
      fb: false,
    };
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
    this.women = this.prod.women;
  }
}
