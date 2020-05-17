import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
  // template: '<h1>Hello world</h1>'
})

export class CustomInputComponent {
  @Input('input-label') label;
}
