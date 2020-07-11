import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '../authentication/auth.service';

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

  constructor(private nameService: ManageNamesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.nameService.getStudents().subscribe(data => {
      console.log(data);
      this.students = data
      console.log(this.students)
    });
  }

  onDelete(id) {
    this.isLoading = true

    this.nameService.deleteStudent(id).subscribe(data => {
      this.nameService.getStudents().subscribe(data => this.students = data);
    })
    this.isLoading = false
  }

  onPageChange(pageEvn: PageEvent) {
    console.log(pageEvn);
  }

  checkAuth() {
    return this.authService.getAuthenticated();
  }

  isCreator(creator) {
    return this.authService.getUserId() === creator;
  }
    // this.pageSize=pageEvn.pageSize
    // this.pageIndex=pageEvn.pageIndex
    // this.nameService.getStudents(this.pageSize,this.pageIndex+1).subscribe(data => {
    //   this.students=data.students;
    //   this.pageLength=data.maxStudents;
    // });


}
