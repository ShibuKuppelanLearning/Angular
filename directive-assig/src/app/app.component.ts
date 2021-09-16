import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword:boolean=false;
  userClicks = [];

  onClick(){
    this.displayPassword = !this.displayPassword;
    this.userClicks.push(new Date());
  }
}
