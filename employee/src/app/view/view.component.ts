import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employee: Employee | null = null;

  constructor(private route: ActivatedRoute, private es: EmployeeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmployeeById(+id);
    }
  }

  getEmployeeById(id: number): void {
    this.es.getEmployeeById(id).subscribe((emp: Employee) => {
      this.employee = emp;
    });
  }
}