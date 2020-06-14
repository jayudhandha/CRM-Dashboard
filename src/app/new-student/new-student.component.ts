import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { ManageNamesService } from '../manage-names.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  name = "";
  branch = "";

  constructor(private nameService: ManageNamesService) { }

  ngOnInit() {
  }

  onSave(studentForm : NgForm) {
    if (studentForm.invalid) {
      return
    }

    console.log(studentForm.value.name, studentForm.value.branch);

    this.nameService.addStudent(studentForm.value.name, studentForm.value.branch).subscribe(response => {
      console.log("Api Success: "+ JSON.stringify(response))
    });
    studentForm.resetForm()
  }
}
