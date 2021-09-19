import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[];

  constructor() {
    this.accounts = [
      {
        name: "MasterAccount",
        status: "active"
      },
      {
        name: "TestAccount",
        status: "inactive"
      },
      {
        name: "HiddenAccount",
        status: "unknown"
      }];
  }

  ngOnInit(): void {

  }

  onAcccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updatedInfo: { id: number, newStatus: string }) {
    this.accounts[updatedInfo.id].status = updatedInfo.newStatus;
  }
}
