import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpclient: HttpClient) { }

  getbooks(): Observable<any> {
    return this.httpclient.get("https://s3.amazonaws.com/api-fun/books.json")
  }


}
