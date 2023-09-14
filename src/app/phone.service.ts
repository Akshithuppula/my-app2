import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private httpClient:HttpClient) { }

  getphone():Observable<any>{
    return this.httpClient.get("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in");
  }

}
