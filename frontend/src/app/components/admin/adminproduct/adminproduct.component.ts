import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css'],
})
export class AdminproductComponent implements OnInit {
  @Input() product: Product | undefined;
  img1: String;
  constructor(private prodServ: ProductService) {}
  deleteProd(id: Number) {
    this.prodServ.deleteProduct(id).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.img1 = this.product.media[0].img;
  }
}
