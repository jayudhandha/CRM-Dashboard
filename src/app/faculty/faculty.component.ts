import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  faculties = [];

  constructor(private nameService: ManageNamesService) { }

  ngOnInit(): void {
    this.nameService.getFaculty().subscribe(data => this.faculties = data);
  }

}
