import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeComponent } from './employee.component';
import { IEmployee } from './employee.model';

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
    listEmployee(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this.apiURL);
        }
    
    ajouterEmployee(employ : IEmployee): Observable<IEmployee>{
        return this.http.post<IEmployee>(this.apiURL, employ, httpOptions);
    }


}


