import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css'],
})
export class AdminproductComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() DelProd = new EventEmitter<Product>();
  img1: String;
  constructor(private prodServ: ProductService) {}
  deleteProd(id: Number) {
    this.prodServ.deleteProduct(id).subscribe((data) => {
      console.log(data);
      this.DelProd.emit(data);
    });
  }
  ngOnInit(): void {
    this.img1 = this.product.media[0].img;
  }
}
