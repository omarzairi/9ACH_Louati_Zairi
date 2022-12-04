import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-womenshome',
  templateUrl: './womenshome.component.html',
  styleUrls: ['./womenshome.component.css'],
})
export class WomenshomeComponent implements OnInit {
  constructor(private prod: ProductService) {}

  ngOnInit(): void {
    this.prod.women = false;
  }
}
