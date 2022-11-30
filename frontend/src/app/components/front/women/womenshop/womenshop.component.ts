import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-womenshop',
  templateUrl: './womenshop.component.html',
  styleUrls: ['./womenshop.component.css'],
})
export class WomenshopComponent implements OnInit {
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
  constructor(private ActiveRoute: ActivatedRoute) {}
  sale() {
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
  ngOnInit(): void {}
}
