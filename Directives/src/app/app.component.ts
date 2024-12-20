import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  nums=[11,2,3,4,5,6];
  names=["muruga","Vimal","Ramesh"];
  data="";
  submit(){
    this.names.push(this.data);
  }
    emp: Employee = new Employee();
    create () {
      this.emp={
        name: "rajesh",
        age: 25,
        gender: "male"
      }
    }
      emps: Employee[]=[]
      submitemps(){
        this.emps.push(this.emp);
        this.emp=new Employee();
      }

    

  
}
