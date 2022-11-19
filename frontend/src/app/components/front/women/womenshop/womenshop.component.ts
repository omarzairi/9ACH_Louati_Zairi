import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-womenshop',
  templateUrl: './womenshop.component.html',
  styleUrls: ['./womenshop.component.css'],
})
export class WomenshopComponent implements OnInit {
  categs = {
    'New in : Shoes': 6992,
    Soes: 4172,
    'Coats & Jackets': 2641,
    Dresses: 8799,
    Jeans: 3630,
    SportsWear: 26091,
    Accessoirs: 4174,
  };

  constructor() {}

  ngOnInit(): void {}
}
