import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './Course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  cmp:Course[]=[];
  e:Course;
  y:Course;
  emp: Course =new Course();
  id=0;
  console.log(this.cmp);
  ngOnInit(): void {
    this.http.get<Course[]>("http://localhost:8080/getall").subscribe(x=>this.cmp=x);
  }
  clickit(){
    this.http.post<Course>("http://localhost:8080/save", this.emp).subscribe(
      response => {
        console.log('Course saved successfully:', response);
        console.log(this.emp)
      },
      error => {
        console.error('Error saving course:', error);
      }
    );
  }
  fetchCourseById() {
    this.http.get<Course>("http://localhost:8080/getbyid/" + this.id).subscribe(y => this.e = y);
  }
  deleteById(){
    this.http.delete<Course>("http://localhost:8080/delete/" + this.id).subscribe(response => {
      console.log('Course Deleted successfully:', response);},
    error => {
      console.error('Error Delete course:', error);});
  }
  saveCourse(courseData: Course) {
    this.http.post<Course>("http://localhost:8080/save", courseData).subscribe(
      response => {
        console.log('Course saved successfully:', response);
      },
      error => {
        console.error('Error saving course:', error);
      }
    );
  }
  updateData(){
    this.http.patch<Course>("http://localhost:8080/save",this.id).subscribe(
      response => {
        console.log('Course Updated successfully:', response);
      },
      error => {
        console.error('Error in updating course:', error);
      }
    );
  }
  title = 'sqlconnection';
  constructor(private http :HttpClient) {}
}
