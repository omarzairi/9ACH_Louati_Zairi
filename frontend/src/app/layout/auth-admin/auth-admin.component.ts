import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css'],
})
export class AuthAdminComponent implements OnInit {
  adminlogin: FormGroup;
  errormsg: String;
  data: any;
  redrict: String;
  constructor(
    private fb: FormBuilder,
    private auth: AuthUserService,
    private routr: Router,
    private act: ActivatedRoute
  ) {
    if (this.auth.adminLogged()) {
      this.routr.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    this.adminlogin = this.fb.nonNullable.group({
      email: [],
      password: [''],
    });
    this.redrict = this.act.snapshot.queryParams['redrict'];
  }
  loginadmin() {
    this.auth.adminlogin(this.adminlogin.value).subscribe(
      (data) => {
        this.data = data;
        this.auth.saveLoggedAdmin(this.data.token);
        this.routr.navigate([this.redrict || '/admin']);
      },
      (err: HttpErrorResponse) => (this.errormsg = err.error.msg)
    );
  }
}
