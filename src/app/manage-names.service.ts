import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './student';
import { Observable } from 'rxjs';
import { faculty } from './faculty';

@Injectable({
  providedIn: 'root' // This service will be available from root scope it means any component can inject it
})
export class ManageNamesService {
  constructor(private http: HttpClient) { }

  getNames() : Observable<student[]> {
    return this.http.get<student[]>('http://localhost:3000/api/student')
  }

  getStudents() : Observable<student[]> {
    return this.http.get<student[]>('http://localhost:3000/api/student')
  }

  getFaculty() : Observable<faculty[]> {
    return this.http.get<faculty[]>('http://localhost:3000/api/faculty')
  }

  updateNames(name) {

  }
}
