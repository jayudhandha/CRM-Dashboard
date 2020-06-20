import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { ManageNamesService } from '../manage-names.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  mode = 'create'
  std : student
  stdId = ""
  isLoading = false
  constructor(private nameService: ManageNamesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(data => {
      if(data.has('stdId')) {
        this.mode = 'edit'
        this.stdId = data.get('stdId');
        this.nameService.getStudent(this.stdId).subscribe(data=> {
          this.std = data;
        })
      } else {
        this.mode = 'create'
        this.stdId = null
      }
    })
  }

  onSave(studentForm : NgForm) {
    if (studentForm.invalid) {
      return
    }
    this.isLoading = true
    if(this.mode == 'create') {
      this.nameService.addStudent(studentForm.value.name, studentForm.value.branch).subscribe(response => {
        console.log("Api Success: "+ JSON.stringify(response))
      });
    } else {
      this.nameService.updateStudent(this.stdId, studentForm.value.name, studentForm.value.branch).subscribe(response => {
        console.log("Update Api Success: "+ JSON.stringify(response))
      });
    }
    this.isLoading = false
    studentForm.resetForm()
  }
}
