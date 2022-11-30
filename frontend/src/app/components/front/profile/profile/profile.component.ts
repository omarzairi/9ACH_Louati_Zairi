import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private auth: AuthUserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
    if (this.auth.userLogged()) {
      this.auth.getProfile().subscribe((user) => (this.user = user));
    }
  }
}
