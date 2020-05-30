import { Component, OnInit } from '@angular/core';
import { ManageNamesService } from '../manage-names.service';

@Component({
  selector: 'app-ang-basics',
  templateUrl: './ang-basics.component.html',
  styleUrls: ['./ang-basics.component.css'],
})
export class AngBasicsComponent implements OnInit {
  name = '';
  todaydate = new Date()
  names = [];
  userInput = '';
  rUserInput = '';
  students = [];


  constructor(private nameService : ManageNamesService) {}

  ngOnInit(): void {
    // console.log('ngOnInit is called...');
    this.nameService.getNames().subscribe(data => this.students = data);
  }

  // getStudentNames() {
  //   return this.nameService.getNames();
  // }

  onSubmit(student) {
    window.alert('Button clicked: ' + this.name);
    console.log('Hello ');
  }


  onClick() {
    this.names.push(this.userInput);
    // to add name at specific index
    this.names.splice(2, 0, this.userInput);
  }

  remove() {
    let index = this.names.indexOf(this.rUserInput);
    if (index !== -1) {
      this.names.splice(index, 1);
    }
  }
}
