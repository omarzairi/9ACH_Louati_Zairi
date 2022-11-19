import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;
  img1: String;

  constructor() {}

  ngOnInit(): void {
    this.img1 = this.product.media[0].img;
  }
}
