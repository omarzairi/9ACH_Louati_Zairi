import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  query: String;
  userLogged: Boolean;
  username: String;
  getSearch(s: String) {
    this.query = s;
  }
  constructor(private auth: AuthUserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
    if (localStorage.getItem('token')) {
      this.username = this.auth.getUsername();
      this.userLogged = this.auth.userLogged();
    } else {
      this.username = null;
      this.userLogged = this.auth.userLogged();
    }
  }
}
