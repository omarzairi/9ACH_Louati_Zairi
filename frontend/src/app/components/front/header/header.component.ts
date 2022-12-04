import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  query: String;
  userLogged: Boolean;
  username: String;
  itemsincart: Number;
  getSearch(s: String) {
    this.query = s;
  }
  constructor(
    private auth: AuthUserService,
    private prodserv: ProductService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
    if (localStorage.getItem('token')) {
      this.username = this.auth.getUsername();
      this.userLogged = this.auth.userLogged();
      this.prodserv.getCart().subscribe((cart) => {
        this.itemsincart = cart.products.length;
      });
    } else {
      this.itemsincart = 0;
      this.username = null;
      this.userLogged = this.auth.userLogged();
    }
  }
}
