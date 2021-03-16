import { Component } from '@angular/core';
import { EmployeeComponent } from './composant/employee/employee.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = "localhost:8000/employees"

  constructor (private http: HttpClient) {
    this.http.get(this.url, { observe:"body", responseType:"json" } ).toPromise().then(data => { console.log(JSON.stringify(data)); })
   }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/