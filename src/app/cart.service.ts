import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Cart } from './cart';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  // Base URL connecting to Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Update Product Items to Cart

  addCart(cart: Cart): Observable<any> {
    return this.http
      .put(`${this.baseUrl}` + `/updatecart`, cart)
      .pipe(catchError(this.handleError));
  }

  // Get Cart Of User

  getCartByUserId(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/getcartbyuserid/${id}`)
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

  // Delete Cart By Product Id

  deleteCartByProductId(userId: number, productId: string): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deletecartitem/${userId}/${productId}`)
      .pipe(catchError(this.handleError));
  }
}
