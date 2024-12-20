import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  // name= 'santhosh Kumar';
  currentDay:number=0;

  name="";
  n1:String = 'santhosh';
  n: number = 10;
  n2: number = 20;
  ngOnInit() {
    const currentDate = new Date();
    this.currentDay = currentDate.getDay();
  }
  alerrt() {
    // this.name = this.title;
    this.name = 'kumar';
    // alert('hello');
  }
  
  
}
