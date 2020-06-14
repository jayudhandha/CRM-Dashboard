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
    return this.http.get<student[]>('http://localhost:3000/api/listStudents')
  }

  addStudent(name, branch) {
    const studentObj : student = {
      id: null,
      name: name,
      branch: branch
    }
    return this.http.post('http://localhost:3000/api/addStudent', studentObj);
  }
}
