import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {


  public books: any = [];
  constructor(private booksService: BooksService) {

    booksService.getbooks().subscribe(
      (data: any) => {
        this.books = [data];
      },
      (err: any) => {
        alert("Internal server error")
      }
    )

  }




}
