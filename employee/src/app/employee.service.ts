import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: any;

  constructor(private http: HttpClient) { }

  private base_Url= 'http://localhost:8080/employee';

  getallEmployee(){
    return this.http.get<Employee[]>(this.base_Url+'/getall');
  }
  getEmployeeById(id: number){
    return this.http.get<Employee>(`${this.base_Url}/get/${id}`);
  }
  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.base_Url+'/save', employee);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<Employee>(`${this.base_Url}/delete/${id}`);
  }
  updateEmployee(employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(`${this.base_Url}/update/${employee.id}`, employee);
  }

}
