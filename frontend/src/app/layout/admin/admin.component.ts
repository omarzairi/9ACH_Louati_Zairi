import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  query: String;
  adminusername: String;
  adminLogged: Boolean;
  getSearch(s: String) {
    this.query = s;
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  constructor(private auth: AuthUserService, private route: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('admintoken')) {
      this.adminusername = this.auth.getadUsername();
      this.adminLogged = this.auth.adminLogged();
    } else {
      this.adminusername = null;
      this.adminLogged = this.auth.adminLogged();
    }
  }
  logout() {
    localStorage.removeItem('admintoken');
    localStorage.removeItem('adminusername');
    this.route.navigate(['/admin/login']);
  }
}
