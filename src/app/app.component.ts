import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jankCVonline';



  constructor() {
  }
  xd(){

  var xd = document.getElementById('app-inicio')
  console.log("xd",xd?.scrollTop)}
}
