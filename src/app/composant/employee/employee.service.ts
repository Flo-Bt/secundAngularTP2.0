import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})


export class EmployeeService {
    url = "localhost:8000/employees";

    constructor (private http: HttpClient) {

    }

    getEmployees():Observable < IEmployee [] >
    { }  
}