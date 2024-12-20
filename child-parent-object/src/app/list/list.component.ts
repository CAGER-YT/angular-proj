import { Component } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
    console.log(this.books);
  }
}
