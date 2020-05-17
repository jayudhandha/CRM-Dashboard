import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ['Jayesh', 'Kod Factory', 'Marwadi', 'Rajkot', 'New value']
  userInput = '';
  rUserInput = ''

  onClick() {
    this.names.splice(2,0,this.userInput)

    // this.names.push(this.userInput)
  }

  remove() {
    let index = this.names.indexOf(this.rUserInput)
    if (index !== -1) {
      this.names.splice(index, 1)
    }
  }
}
