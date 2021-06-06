import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GrowthreportService {

  // Base URL connecting Backend

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }

  // Get All Growth Reports

  getGrowthReports(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/getallgrowthreport/`)
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

  // Create Growth Report

  createGrowthReport(currentdate: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/insertgrowthreport/${currentdate}`, null)
      .pipe(catchError(this.handleError));
  }
}
