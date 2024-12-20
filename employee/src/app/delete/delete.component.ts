import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private es: EmployeeService,private ar:ActivatedRoute,private route:Router)  { }

  empId:number; 
  deleteEmployee() {
    this.empId = this.ar.snapshot.params['id'];
    this.es.deleteEmployee(this.empId).subscribe(()=>{alert('Employee Deleted Successfully');});
    // this.route.navigate(['/view-list']);
  }

}