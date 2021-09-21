import { Component, OnInit, Input } from '@angular/core';
import { LoggingService, } from '../services/logging.service';
import {AccountServices} from '../services/accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,private accountsService:AccountServices) { }

  ngOnInit(): void {

  }

  onSetTo(newStatus: string) {
    this.account.status = newStatus;
    this.accountsService.updateAccountStatus(this.id, newStatus);
    this.accountsService.updateStatus.emit(newStatus);
    // this.loggingService.logAccountStatusUpdate(this.account.name,this.account.status);
  }
}