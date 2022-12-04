import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/cart';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent implements OnInit {
  @Input() p: Product;
  cart: Cart;
  @Output() Delp = new EventEmitter<Product>();
  constructor(private prodserv: ProductService) {}

  ngOnInit(): void {}
  DeleteProd() {
    this.prodserv.getCart().subscribe((cart) => {
      this.cart = cart;
      let prod: any = this.p;

      this.cart.products = this.cart.products.filter((id) => id != prod._id);
      this.Delp.emit(this.p);
      this.prodserv.updateCart(this.cart).subscribe();
    });
  }
}
