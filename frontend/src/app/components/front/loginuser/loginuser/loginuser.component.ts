import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private routr: Router,
    private act: ActivatedRoute
  ) {
    if (this.auth.userLogged()) {
      this.routr.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.userlogin = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get email() {
    return this.userlogin.get('email');
  }
  get pass() {
    return this.userlogin.get('password');
  }
  login() {
    this.auth.login(this.userlogin.value).subscribe(
      (data) => {
        this.data = data;
        this.auth.saveLoggedUser(this.data.token);
        this.routr.navigate([this.act.snapshot.queryParams['redrict'] || '/']);
      },
      (err: HttpErrorResponse) => (this.errormsg = err.error.msg)
    );
  }
}
