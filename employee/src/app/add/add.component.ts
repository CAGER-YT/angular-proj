import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(private es: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  this.es.postEmployee(this.employee).subscribe(x=>{alert('Employee added successfully!');}
    );
  }
}
