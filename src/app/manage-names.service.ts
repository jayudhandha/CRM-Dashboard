import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './student.model';
import { Observable } from 'rxjs';
import { faculty } from './faculty';

@Injectable({
  providedIn: 'root' // This service will be available from root scope it means any component can inject it
})
export class ManageNamesService {
  BASE_PATH = 'http://localhost:3000/api/'
  constructor(private http: HttpClient) { }

  getNames() : Observable<student[]> {
    return this.http.get<student[]>(this.BASE_PATH+'student')
  }

  getStudents() : Observable<student[]> {
    return this.http.get<student[]>(this.BASE_PATH+'listStudents')
  }

  addStudent(name, branch) {
    const studentObj : student = {
      id: null,
      name: name,
      branch: branch
    }
    return this.http.post(this.BASE_PATH+'addStudent', studentObj);
  }

  getStudent(id) {
    return this.http.get<student>(this.BASE_PATH+id)
  }

  updateStudent(id, name, branch) {
    const std = {
      name: name,
      branch: branch
    }
    return this.http.put(this.BASE_PATH+id, std)
  }

  deleteStudent(id) {
    return this.http.delete(this.BASE_PATH+id);
  }
}
