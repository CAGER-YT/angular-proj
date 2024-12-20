import { Component } from '@angular/core';

@Component({
  selector: 'app-studentarray',
  templateUrl: './studentarray.component.html',
  styleUrls: ['./studentarray.component.css']
})
export class StudentarrayComponent {

  students = [
    {name: 'John', age: 25},
    {name: 'Peter', age: 30},
    {name: 'Mary', age: 28},
    {name: 'Joseph', age: 35}
  ];

  showTableFlag: boolean = false;

  showTable() {
    this.showTableFlag = !this.showTableFlag;
  }
}
