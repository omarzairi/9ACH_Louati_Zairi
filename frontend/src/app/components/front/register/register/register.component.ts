import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userRegister: FormGroup;
  errormsg: String;
  data: any;
  constructor(
    private fb: FormBuilder,
    private auth: AuthUserService,
    private routr: Router
  ) {}

  ngOnInit(): void {
    this.userRegister = this.fb.nonNullable.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  register() {
    this.auth.register(this.userRegister.value).subscribe(
      (data) => {
        this.data = data;
        this.auth.saveLoggedUser(this.data.token);
        this.routr.navigate(['/']);
      },
      (err: HttpErrorResponse) => (this.errormsg = err.error.msg)
    );
  }
}
