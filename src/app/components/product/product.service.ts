import { Product } from './product.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://127.0.0.1:8000/api/products";

  constructor(private matSnackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.matSnackBar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: any): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + '/' + product.id, product)
  }

  delete(id: any) {
    return this.http.delete<Product>(this.baseUrl + '/' + id)
  }

}

