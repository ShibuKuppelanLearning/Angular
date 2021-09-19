import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successMsg: string = "Operation completed successfully...";
  failureMsg: string = "Unable to process your request";
  operationStatus: string = "success";
  currentMonth: number = 1;

  processRequest() {
    this.operationStatus = this.operationStatus === "success" ? "failure" : "success";
  }

  nextMonth(): void {
    this.currentMonth = this.currentMonth + 1;
    if (this.currentMonth > 12) {
      this.currentMonth = 1;
    }
  }
}
