import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css'],
})
export class AdminproductComponent implements OnInit {
  @Input() product: Product | undefined;
  img1: String;
  constructor() {}

  ngOnInit(): void {
    this.img1 = this.product.media[0].img;
  }
}
