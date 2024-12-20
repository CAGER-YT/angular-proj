import { Component } from '@angular/core';
import { Course } from '../Course';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  emp: Course =new Course();
  constructor(private http: HttpClient, private router: Router) {}
  clickit(){
    console.log(this.emp);
    this.http.post<Course>("http://localhost:8080/save", this.emp).subscribe(() => {
      this.router.navigate(['/get']);
    });
  }
  
}
