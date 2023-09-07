import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) { }
 
  createlogin(data:any):Observable<any>{
    return this.httpclient.post("https://reqres.in/api/login",data)
  }
}
