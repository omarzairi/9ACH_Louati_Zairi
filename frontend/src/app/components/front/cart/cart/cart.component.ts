import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/cart';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart;
  prods: Product[] = [];
  subprice: any = 0;
  shipping: Number = 0.0;
  total: Number;
  username: String =
    localStorage.getItem('username') || localStorage.getItem('adminusername');
  constructor(private prodserv: ProductService) {}
  add(p: Product) {
    this.prods.push(p);
  }
  Delete(P: Product) {
    this.prods = this.prods.filter((prod) => prod.id != P.id);
    let prix: any = P.price.current.value;
    this.subprice -= prix;
    this.total = this.subprice + this.shipping;
  }

  ngOnInit(): void {
    this.prodserv.getCart().subscribe((cart) => {
      this.cart = cart;
      this.cart.products.map((item) => {
        this.prodserv.getByObjId(item).subscribe((prod) => {
          this.prods.push(prod);
          this.subprice += prod.price.current.value;
          this.total = this.subprice + this.shipping;
        });
      });
    });
  }
}
