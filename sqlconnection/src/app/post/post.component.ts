import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../Course';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  emp: Course =new Course();
  constructor(private http :HttpClient) {}
  clickit(){
    console.log(this.emp);
    this.http.post<Course>("http://localhost:8080/save", this.emp);
  }
  

}