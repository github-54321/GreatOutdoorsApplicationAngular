import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Add Items Wishlist 

  addWish(userId: number, productId: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/insertwishlist/${userId}/${productId}`, null)
      .pipe(catchError(this.handleError));
  }

  // Get Items of wishlist

  getWish(userId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/getwishlist/${userId}`)
      .pipe(catchError(this.handleError));
  }

  // Delete Item in Wishlist

  deleteWish(productId: string, userId: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deleteproductinwishlist/${productId}/${userId}`)
      .pipe(catchError(this.handleError));
  }

  // Handling Error

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', error.error.message);
    } else {
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service... Press OK to continue');
  }
}
