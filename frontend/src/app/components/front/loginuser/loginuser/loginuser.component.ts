import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css'],
})
export class LoginuserComponent implements OnInit {
  userlogin: FormGroup;
  errormsg: String;
  data: any;
  constructor(
    private fb: FormBuilder,
    private auth: AuthUserService,
    private routr: Router
  ) {}

  ngOnInit(): void {
    this.userlogin = this.fb.nonNullable.group({
      email: [],
      password: [''],
    });
  }
  login() {
    this.auth.login(this.userlogin.value).subscribe(
      (data) => {
        this.data = data;
        this.auth.saveLoggedUser(this.data.token);
        this.routr.navigate(['/']);
      },
      (err: HttpErrorResponse) => (this.errormsg = err.error.msg)
    );
  }
}
