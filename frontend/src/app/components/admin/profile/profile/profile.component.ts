import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private auth: AuthUserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.auth.adminLogged()) {
      this.auth.getAdminProfile().subscribe((user) => {
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
      this.succmess = undefined;
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
      this.auth.editAdminProfile(user).subscribe((data) => {
        this.data = data;
        this.dontmatch = false;
        this.succmess = this.data.msg;
        this.auth.saveLoggedAdmin(this.data.token);
      });
    }
  }
}
