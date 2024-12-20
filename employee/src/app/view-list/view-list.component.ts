import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  constructor(private es: EmployeeService,private router: Router) { }

  title = 'employee';
  emps: Employee[] = [];
  filteredEmps: Employee[] = [];
  p: number = 1; 
  itemsPerPage: number = 10; 

  filterName: string = '';
  filterMinAge: number | null = null;
  filterMaxAge: number | null = null;
  filterGender: string = '';


  getallEmployee() {
    this.es.getallEmployee().subscribe(x => { this.emps = x; 
      this.filteredEmps = x; // Initialize filteredEmps with all employees
    });
    console.log(this.emps);
  }

  applyFilters() {
    this.filteredEmps = this.emps.filter(emp => {
      return (!this.filterName || emp.name.toLowerCase().includes(this.filterName.toLowerCase())) &&
             (!this.filterMinAge || emp.age >= this.filterMinAge) &&
             (!this.filterMaxAge || emp.age <= this.filterMaxAge) &&
             (!this.filterGender || emp.gender === this.filterGender);
    });
  }

  ngOnInit() {
    this.getallEmployee();
  }
  viewEmployee(id: number): void {
    this.router.navigate(['/view', id]);
  }
  updateEmployee(id: number): void {
    this.router.navigate(['/edit', id]);
  }
  deleteEmployee(id: number): void {
    this.es.deleteEmployee(id).subscribe(() => {
      this.getallEmployee();
      alert('Employee Deleted Successfully');
    });
    this.router.navigate(['view-list']);
  }
}
