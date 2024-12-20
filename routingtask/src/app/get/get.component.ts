import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from '../Course';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit {
  cmp:Course[]=[];

  ngOnInit(): void {
    this.http.get<Course[]>("http://13.201.41.168:8080/getall").subscribe(x=>this.cmp=x);
  }
  constructor(private http :HttpClient) {}

}
