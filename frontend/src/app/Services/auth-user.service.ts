import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../user';

const URL = 'http://localhost:5000/api/users';
@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  helper = new JwtHelperService();
  constructor(private http: HttpClient) {}
  register(body: any): Observable<User> {
    return this.http.post<User>(`${URL}/signup`, body);
  }
  login(body: any): Observable<User> {
    return this.http.post<User>(`${URL}/login`, body);
  }
  adminlogin(body: any): Observable<User> {
    return this.http.post<User>(`${URL}/loginadmin`, body);
  }
  getAllusers(): Observable<User[]> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.get<User[]>(URL, { headers: reqHeader });
  }
  saveLoggedUser(token: any) {
    let decodedToken = this.helper.decodeToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('username', decodedToken.name);
  }
  saveLoggedAdmin(token: any) {
    let decodedToken = this.helper.decodeToken(token);
    localStorage.setItem('admintoken', token);
    localStorage.setItem('adminusername', decodedToken.name);
  }
  getUsername() {
    return this.helper.decodeToken(localStorage.getItem('token')).name;
  }
  getadUsername() {
    return this.helper.decodeToken(localStorage.getItem('admintoken')).name;
  }
  userLogged() {
    if (localStorage.getItem('token')) {
      return !this.helper.isTokenExpired(localStorage.getItem('token'));
    }
    return false;
  }
  adminLogged() {
    if (localStorage.getItem('admintoken')) {
      return (
        !this.helper.isTokenExpired(localStorage.getItem('admintoken')) &&
        this.helper.decodeToken(localStorage.getItem('admintoken')).isAdmin
      );
    }
    return false;
  }
  getProfile(): Observable<User> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<User>(`${URL}/profile`, {
      headers: reqHeader,
    });
  }
  getAdminProfile(): Observable<User> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.get<User>(`${URL}/profile`, {
      headers: reqHeader,
    });
  }
  editProfile(body: User): Observable<User> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<User>(`${URL}/profile`, body, {
      headers: reqHeader,
    });
  }
  editAdminProfile(body: User): Observable<User> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.put<User>(`${URL}/adminprofile`, body, {
      headers: reqHeader,
    });
  }
}
