import { Component, OnInit } from '@angular/core';
//import { threadId } from 'node:worker_threads';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


employee : IEmployee[];



  constructor ( private employeeService : EmployeeService ) {
    this.employee = employeeService.listEmployee();
  }

  ngOnInit(): void {
    this.employeeService.listEmployee().subscribe(employ => {
      console.log(employ);
      this.employee = employ;
    });
  }

}
