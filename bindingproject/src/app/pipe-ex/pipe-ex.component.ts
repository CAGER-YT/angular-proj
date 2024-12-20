import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  templateUrl: './pipe-ex.component.html',
  styleUrl: './pipe-ex.component.css'
})
export class PipeExComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    console.log(this.price);
  }

  price=100;
  
  
  name="India";

  dateValue =new Date;
  isDancing = false;

  startDancing() {
    this.isDancing = true;
  }
}
