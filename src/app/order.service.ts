import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from './Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Add Order 

  addOrder(order: Order): Observable<any> {
    return this.http
      .post(`${this.baseUrl}` + `/addOrder`, order)
      .pipe(catchError(this.handleError));
  }

  // Handling Errors

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', error.error.message);
    } else {
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service... Press OK to continue');
  }

  // Get Order By User Id

  getOrdersByUserId(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/findOrdersByUserId/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Delete Order By Product Id

  deleteOrderByProductId(userId: number, productId: string): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deleteOrder/${userId}/${productId}`)
      .pipe(catchError(this.handleError));
  }

  // Order All Items present in cart

  makeOrderFromCart(userId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/makeOrder/${userId}`)
      .pipe(catchError(this.handleError));
  }

  // Delete Order By Order ID

  deleteOrderByorderId(orderId: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deleteOrderById/${orderId}`)
      .pipe(catchError(this.handleError));
  }
}
