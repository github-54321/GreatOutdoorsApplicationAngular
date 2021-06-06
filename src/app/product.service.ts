import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Get All Products

  getProductList(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/getallproducts`)
      .pipe(catchError(this.handleError));
  }

  // Remove Products By Id

  removeProductById(productId: string): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deleteByProductId/${productId}`)
      .pipe(catchError(this.handleError));
  }

  // Create Product

  createProduct(product: Product): Observable<any> {
    return this.http
      .post(`${this.baseUrl}` + `/addProduct`, product)
      .pipe(catchError(this.handleError));
  }

  // Update Product

  editProduct(product: Product): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/updateProduct`, product)
      .pipe(catchError(this.handleError));
  }

  // Get Product By Id

  getProductById(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/findProductById/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Search Product By Keyword

  search(productName: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/searchbykeyword/${productName}`)
      .pipe(catchError(this.handleError));
  }

  // Get Product By category

  getProductByCategory(category: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/findProductCategory/${category}`)
      .pipe(catchError(this.handleError));
  }

  // Filter Product By Price

  filterByPrice(maxPrice: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/filter/${maxPrice}`)
      .pipe(catchError(this.handleError));
  }

  // Handling Error

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', error.error.message);
    } else {
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }
}
