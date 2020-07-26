import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '../authentication/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  panelOpenState = false;
  isLoading = false
  students = [];
  pageIndex=0;
  pageLength = 10;
  pageSize = 2;
  pageOptions = [1,2,5,10]

  constructor(private nameService: ManageNamesService, private authService: AuthService, private notifier: NotifierService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pageIndex = parseInt(localStorage.getItem('pageIndex'))
    this.pageSize = parseInt(localStorage.getItem('pageSize'))

    this.nameService.getStudents(this.pageSize, this.pageIndex+1).subscribe(data => {
      this.isLoading = false;
      console.log(data);
      this.students = data.students
      this.pageLength=data.maxStudents;
      console.log(this.students)
    });
  }

  onDelete(id, name) {
    this.isLoading = true

    this.nameService.deleteStudent(id).subscribe(data => {
      this.nameService.getStudents(this.pageSize, 1).subscribe(data => {
        this.students = data.students;
        this.pageLength=data.maxStudents;
        this.pageIndex = 0; // reset page index once we delete any data
      });
      this.notifier.notify("success", "Data of "+name+" deleted...");
    })
    this.isLoading = false
  }

  onPageChange(pageEvn: PageEvent) {
    console.log(pageEvn);
    this.pageSize=pageEvn.pageSize
    this.pageIndex=pageEvn.pageIndex
    localStorage.setItem('pageIndex', this.pageIndex+"");
    localStorage.setItem('pageSize', this.pageSize+"");

    this.nameService.getStudents(this.pageSize,this.pageIndex+1).subscribe(data => {
      this.students=data.students;
      this.pageLength=data.maxStudents;
    });
  }

  checkAuth() {
    return this.authService.getAuthenticated();
  }

  isCreator(creator) {
    return this.authService.getUserId() === creator;
  }



}
