import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() bookadded= new EventEmitter<Book>();
  name: string ;
  price: number ;
  author: string ; 
  

  book:Book;

  submit(){
    this.bookadded.emit(new Book(this.name, this.price, this.author));
    console.log(this.book);
  }
}
