import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [];

  panelOpenState = false;

  constructor(private nameService: ManageNamesService) { }

  ngOnInit(): void {
    this.nameService.getStudents().subscribe(data => this.students = data);
  }

}
