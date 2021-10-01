import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Thirdparty } from './thirdparty';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyService {

  private apiURL = "http://localhost:8000/api/thirdpartie/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Thirdparty[]> {
   return this.httpClient.get<Thirdparty[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(thirdparty:Object): Observable<Thirdparty> {
   return this.httpClient.post<Thirdparty>(this.apiURL, JSON.stringify(thirdparty), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:Number): Observable<Thirdparty> {
   return this.httpClient.get<Thirdparty>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:Number, thirdparty:Object): Observable<Thirdparty> {
   return this.httpClient.put<Thirdparty>(this.apiURL + id, JSON.stringify(thirdparty), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:Number){
   return this.httpClient.delete<Thirdparty>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error: any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
