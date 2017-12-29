import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quinimezclador';
  quiniNames: String[];

  constructor() {
    this.quiniNames = [];
  }

  addQuiniName(quiniName: String) {
    this.quiniNames.push(quiniName);
  }
}
