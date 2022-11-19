import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
const URL = 'http://localhost:5000/api/products/';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }
  getProductsByCategId(categId): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL}categId=${categId}`);
  }
}
