import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  prodlen: Number;
  userlen: Number;
  lastProd: String;
  lastUser: String;
  constructor(
    private prodserv: ProductService,
    private userserv: AuthUserService
  ) {}

  ngOnInit(): void {
    this.prodserv.getAllProducts().subscribe((data) => {
      this.prodlen = data.length;
      this.lastProd = data[data.length - 1].name;
    });
    this.userserv.getAllusers().subscribe((data) => {
      this.userlen = data.length;
      this.lastUser = data[data.length - 1].email;
    });
  }
}
