import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { Customer } from './Customer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Get All Customers

  getCustomers(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/getallcustomers`)
      .pipe(catchError(this.handleError));
  }

  // Handling errors

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', error.error.message);
    } else {
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }

  // Remove Customer By Id

  removeCustomerById(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseUrl}/deletecustomerByCustomerId/` + id)
      .pipe(catchError(this.handleError));
  }

  // View Customer By Id

  getCustomerById(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/viewCustomerbyCustomerId/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Add Customer 

  addCustomer(customer: Customer): Observable<any> {
    return this.http
      .post(`${this.baseUrl}` + `/insertcustomer/`, customer)
      .pipe(catchError(this.handleError));
  }

  // Update Customer

  editCustomer(customer: Customer): Observable<any> {
    return this.http
      .put(`${this.baseUrl}` + `/updatecustomer/`, customer)
      .pipe(catchError(this.handleError));
  }

  // Checking Login Credentials

  login(email: string, pass: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/logincustomer/${email}/${pass}`);
  }

  // Get Customer By Id

  getUserById(userId: any): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/viewCustomerbyCustomerId/${userId}`)
      .pipe(catchError(this.handleError));
  }

  // Login for Admin

  loginAdmin(userId: number, pass: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/login/${userId}/${pass}`);
  }

  // View Admin By Id

  getAdminById(userId: any): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/viewuserbyid/${userId}`)
      .pipe(catchError(this.handleError));
  }
 
  // Checking Login For Admin & Customer

  isLoggedAdmin(): boolean {
    let adminid = sessionStorage.getItem('adminid');
    if (adminid == null || adminid == '') return false;
    else return true;
  }
  isLoggedCustomer(): boolean {
    let email = sessionStorage.getItem('userid');
    if (email == null || email == '') return false;
    else return true;
  }
}
