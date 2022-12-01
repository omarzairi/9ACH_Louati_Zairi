import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css'],
})
export class EditproductComponent implements OnInit {
  prodid: Number;
  prod: Product;
  Prod: FormGroup;
  date: String;
  constructor(
    private ActiveRoute: ActivatedRoute,
    private prodserv: ProductService,
    private fb: FormBuilder
  ) {}
  getDate() {
    return this.date.slice(0, this.date.indexOf('T'));
  }
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
  editProd() {
    let produit = new Product(
      this.prod.id,
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
      this.prod.comments
    );
    this.prodserv.editProduct(this.prodid, produit).subscribe();
  }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((params) => {
      this.prodid = params['id'];
      this.prodserv.getProductById(params['id']).subscribe((product) => {
        this.prod = product[0];
        this.date = String(this.prod.dateCreation);

        this.Prod = this.fb.nonNullable.group({
          name: this.prod.name,
          categorie: this.prod.categId,
          prev: this.prod.price.prev.value
            ? this.prod.price.prev.value.toFixed(2)
            : null,
          current: this.prod.price.current.value.toFixed(2),
          isSellingFast: this.prod.isSellingFast,
          dateCreation: this.getDate(),
          img1: this.prod.media[0].img,
          img2: this.prod.media[1].img,
          img3: this.prod.media[2].img,
          img4: this.prod.media[3].img,
          brandName: this.prod.brandName,
        });
      });
    });
  }
}
