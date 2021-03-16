import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee.component';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" } )
};

@Injectable({
    providedIn:'root'
})


export class EmployeeService {
    apiURL : string = "localhost:8000/employees";

    constructor (private http: HttpClient) {

    }

    // getEmployees():Observable <IEmployee[]> { 
    //     return this.http.get<IEmployee[]>(this.url)
    //     .pipe(
    //         tap(data=> console.log("all : " + JSON.stringify(data) ))
    //     )
    //  }  
    listEmployee(): Observable<EmployeeComponent[]>{
        return this.http.get<EmployeeComponent[]>(this.apiURL);
        }
    
    ajouterEmployee(employ : EmployeeComponent): Observable<EmployeeComponent>{
        return this.http.post<EmployeeComponent>(this.apiURL, employ, httpOptions);
    }


}


