import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'santhosh';
  ImagePath: string; 
  
  constructor() { 
    //image location 
    this.ImagePath = 'C:\Angular\sample\src\assets\image\WIN_20231129_14_15_41_Pro.jpg'
  } 
  
  ngOnInit() { 
  } 
}
