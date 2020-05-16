import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-basics',
  templateUrl: './ang-basics.component.html',
  styleUrls: ['./ang-basics.component.css']
})
export class AngBasicsComponent implements OnInit {
  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    window.alert("Button clicked: "+this.name)  
    console.log("Hello ")
  }

}
