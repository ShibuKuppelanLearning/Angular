import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountServices } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountServices) {
    this.accountsService.updateStatus.subscribe(
      (newStatus: string) => {
        alert('update status alert : ' + newStatus);
      }
    );
  }

  ngOnInit(): void {

  }

  onCreateAccount(name: string, status: string): void {
    this.accountsService.addNewAccount(name, status);
    // this.loggingService.logNewAccountAdded(name, status);
  }
}