import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './student.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root' // This service will be available from root scope it means any component can inject it
})
export class ManageNamesService {
  constructor(private http: HttpClient) { }

  getNames() : Observable<student[]> {
    return this.http.get<student[]>(environment.API_BASE_PATH+'student')
  }

  getStudents(pageSize, pageIndex) {
    return this.http.get<{students: student[], maxStudents: number}>(environment.API_BASE_PATH+'listStudents?pagesize='+pageSize+"&pageindex="+pageIndex)
  }

  addStudent(name, branch) {
    const studentObj : student = {
      id: null,
      name: name,
      branch: branch
    }
    return this.http.post(environment.API_BASE_PATH+'addStudent', studentObj);
  }

  getStudent(id) {
    return this.http.get<student>(environment.API_BASE_PATH+id)
  }

  updateStudent(id, name, branch) {
    const std = {
      name: name,
      branch: branch
    }
    return this.http.put(environment.API_BASE_PATH+id, std)
  }

  deleteStudent(id) {
    return this.http.delete(environment.API_BASE_PATH+id);
  }
}
