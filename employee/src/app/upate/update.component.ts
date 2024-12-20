import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getEmployeeById(id);
    });
  }

  getEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (employee: Employee) => {
        this.employee = employee;
      },
      error => {
        console.error('Error fetching employee:', error);
      }
    );
  }

  update(employee: Employee): void {
    if (employee && employee.id) {
      this.employeeService.updateEmployee(employee, employee.id).subscribe(
        response => {
          console.log('Employee updated successfully:', response);
        },
        error => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }
}