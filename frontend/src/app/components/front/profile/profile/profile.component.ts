import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  profile: FormGroup;
  dontmatch: Boolean;
  data: any;
  succmess: String;
  constructor(
    private auth: AuthUserService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (this.auth.userLogged()) {
      this.auth.getProfile().subscribe((user) => {
        this.user = user;
        this.profile = this.fb.nonNullable.group({
          email: user.email,
          name: user.name,
          password: [''],
          cnfpass: [''],
        });
      });
    }
  }
  udpadeProf() {
    if (this.profile.value['password'] != this.profile.value['cnfpass']) {
      this.dontmatch = true;
    } else {
      this.dontmatch = false;
      let user = new User(
        this.profile.value['name'],
        this.profile.value['email'],
        this.profile.value['password'] || this.user.password,
        this.user.joinedAt,
        this.user.isAdmin
      );
      this.auth.editProfile(user).subscribe((data) => {
        this.data = data;
        this.succmess = this.data.msg;
        this.auth.saveLoggedUser(this.data.token);
      });
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.route.navigate(['/']);
  }
}
