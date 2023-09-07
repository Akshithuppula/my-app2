import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
  constructor(private _httpClient:HttpClient){ }

  getUser():Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getfilteruser(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }

  getsortbyuser(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortby="+column+"&order="+order);
  }

  getdeleteuser(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

getpageuser(limit:any,page:any):Observable<any>{
return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page)
}

createusers(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
}



}
