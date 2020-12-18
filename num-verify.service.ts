import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient}   from '@angular/common/http';
import {Observable}   from 'rxjs';
import {ApiResult}    from './api-result';
@Injectable({
  providedIn: 'root'
})
export class NumVerifyService {
  private baseURL = "http://localhost:8082/api2";

  constructor (private http:HttpClient) { }

  validate(input :string):Observable<ApiResult>{
    return this.http.get<ApiResult>(`${this.baseURL}/call/${input}`);
  }

   saveRequest(res:ApiResult ):Observable<ApiResult>{
       return this.http.post<ApiResult>(`${this.baseURL}/save`,res);

   }

   getAll():Observable<ApiResult[]>{
       return this.http.get<ApiResult[]>(`${this.baseURL}/getAll`);

   }

    
  }


   
    

