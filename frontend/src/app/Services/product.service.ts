import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Review } from '../review';
import { Cart } from '../cart';
var reqHeader = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
});

const URL = 'http://localhost:5000/api/products/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  deletedId: Number;
  women: Boolean;
  men: Boolean;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    var adreqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.get<Product[]>(URL, { headers: adreqHeader });
  }
  getProductsByCategId(categId: Number): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}categId=${categId}`);
  }
  getProductById(Id: Number): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}id=${Id}`);
  }
  searchProductsByName(name: String): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}name=${name}`);
  }
  addComment(id: Number, body: Review): Observable<Product[]> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<Product[]>(`${URL}/comments/add/${id}`, body, {
      headers: reqHeader,
    });
  }
  addToCart(body: Object): Observable<Cart> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<Cart>(`${URL}cart`, body, {
      headers: reqHeader,
    });
  }
  getCart(): Observable<Cart> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<Cart>(`${URL}/cart`, {
      headers: reqHeader,
    });
  }
  updateCart(body: Cart): Observable<Cart> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<Cart>(`${URL}/cart/update`, body, {
      headers: reqHeader,
    });
  }
  getByObjId(_id: String): Observable<Product> {
    return this.http.get<Product>(`${URL}_id=${_id}`);
  }
  addProduct(body: Product): Observable<Product> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.post<Product>(`${URL}add`, body, {
      headers: reqHeader,
    });
  }
  deleteProduct(id: Number): Observable<Product> {
    var adreqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.delete<Product>(`${URL}delete/id=${id}`, {
      headers: adreqHeader,
    });
  }
  editProduct(id: Number, body: Product): Observable<Product> {
    var adreqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('admintoken'),
    });
    return this.http.put<Product>(`${URL}update/${id}`, body, {
      headers: adreqHeader,
    });
  }
  //API Gratuit (PLUS)
  getCurrency(have: String, want: String): Observable<Number> {
    var adreqHeader = new HttpHeaders({
      'X-RapidAPI-Key': '10281b1538msh9a7b91ebc042434p193852jsn4478e61a4d09',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
    });
    return this.http.get<Number>(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${have}&to=${want}`,
      { headers: adreqHeader }
    );
  }
}
