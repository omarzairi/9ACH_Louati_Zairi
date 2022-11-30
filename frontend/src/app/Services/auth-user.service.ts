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
  saveLoggedUser(token: any) {
    let decodedToken = this.helper.decodeToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('username', decodedToken.name);
  }
  getUsername() {
    return this.helper.decodeToken(localStorage.getItem('token')).name;
  }
  userLogged() {
    if (localStorage.getItem('token')) {
      return !this.helper.isTokenExpired(localStorage.getItem('token'));
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
}
