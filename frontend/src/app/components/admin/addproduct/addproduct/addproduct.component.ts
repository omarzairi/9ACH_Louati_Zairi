import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  Prod: FormGroup;
  produit: Product;
  errormsg: String;
  constructor(
    private fb: FormBuilder,
    private productServ: ProductService,
    private route: Router
  ) {}
  getCateg(id: any) {
    switch (id) {
      case '7046':
        return 'Sale';
      case '8409':
        return 'Sale';
      case '4209':
        return 'Shoes';
      case '4172':
        return 'Shoes';
      case '3606':
        return 'Coats & Jackets';
      case '5668':
        return 'Hoodies & Sweatshirts';
      case '4208':
        return 'Jeans';
      case '3630':
        return 'Jeans';
      case '26090':
        return 'SportsWear';
      case '26091':
        return 'SportsWear';
      case '4210':
        return 'Accessoires';
      case '4174':
        return 'Accessoires';
      case '19517':
        return 'Face + Body';
      case '1314':
        return 'Face + Body';
      case '6455':
        return 'Boots';
      case '6456':
        return 'Trainers';
      case '6461':
        return 'Heels';
      case '11895':
        return 'Leather Jackets';
      case '28643':
        return 'Puffer Jackets';
      case '11900':
        return 'Faux Fur Coats';
      case '8799':
        return 'Dresses';
      case '4540':
        return 'Skin Care';
      case '5021':
        return 'Hair Care';
      case '5020':
        return 'Makeup';
      case '28425':
        return 'Fragrances';
      default:
        return 'New In';
    }
  }
  addProd() {
    this.produit = new Product(
      this.Prod.value['id'],
      this.Prod.value['name'],
      {
        current: {
          value: Number(this.Prod.value['current']),
          text: `$${this.Prod.value['current']}`,
        },
        prev: {
          value:
            this.Prod.value['prev'] != 0 || null || undefined
              ? this.Prod.value['prev']
              : null,
          text:
            this.Prod.value['prev'] != 0 || null || undefined
              ? `$${this.Prod.value['prev']}`
              : null,
        },
      },
      this.Prod.value['isSellingFast'],
      true,
      new Date(this.Prod.value['dateCreation']),
      [
        { img: this.Prod.value['img1'] },
        { img: this.Prod.value['img2'] },
        { img: this.Prod.value['img3'] },
        { img: this.Prod.value['img4'] },
      ],
      this.getCateg(this.Prod.value['categorie']),
      this.Prod.value['categorie'],
      this.Prod.value['brandName'],
      []
    );
    this.productServ.addProduct(this.produit).subscribe(
      (data) => this.route.navigate(['/admin/allproducts']),
      (error: HttpErrorResponse) => (this.errormsg = error.error.msg)
    );
  }
  ngOnInit(): void {
    this.Prod = this.fb.nonNullable.group({
      id: [''],
      name: [''],
      categorie: ['27110'],
      prev: [''],
      current: [''],
      isSellingFast: true,
      dateCreation: [''],
      img1: [''],
      img2: [''],
      img3: [''],
      img4: [''],
      brandName: [''],
    });
  }
}
