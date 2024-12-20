import { Component } from '@angular/core';
import { Book } from '../book';  // Adjust the import path as necessary

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // books: Book[] = [];

  // newBook: Book = new Book('', '', 0);

  // addBook() {
  //   this.books.push(new Book(this.newBook.name, this.newBook.author, this.newBook.price));
  //   this.newBook = new Book('', '', 0);  // Reset the form
  // }

  name: string ;
  author: string ;
  price: number ;

  bppk: Book;
  books: Book[] = [];
  submit(){
    this.bppk = new Book(this.name, this.author, this.price);
    this.books.push(this.bppk);
    console.log
  }

}