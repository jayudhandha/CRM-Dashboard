import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This service will be available from root scope it means any component can inject it
})
export class ManageNamesService {
  names = ['Jayesh', 'Kod Factory', 'Marwadi', 'Rajkot', 'from service'];

  constructor() { }

  getNames() {
    return this.names;
  }

  updateNames(name) {
    this.names.push(name)
  }
}
