import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Product } from '../../product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private apiurl='http://localhost:8081';
  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiurl}/products`);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiurl}/products/${id}`);
  }

  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiurl}/products`,product);
  }

  deleteProduct(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiurl}/products/${id}`)

  }

  updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiurl}/products/${id}`,product);

  }


}
