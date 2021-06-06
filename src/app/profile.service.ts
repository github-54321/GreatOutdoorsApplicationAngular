import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Get Customer By Id

  getCustomerById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/viewCustomerbyCustomerId/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Update Customer Details 

  updateCustomer(customer: Customer): Observable<any> {
    return this.http
      .put(`${this.baseUrl}` + `/updatecustomer/`, customer)
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
