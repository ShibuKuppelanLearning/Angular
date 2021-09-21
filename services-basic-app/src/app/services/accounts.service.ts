import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AccountServices {
    accounts: { name: string, status: string }[];

    updateStatus: EventEmitter<string> = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {
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

    addNewAccount(name: string, status: string) {
        this.accounts.push({ name, status });
        this.loggingService.logNewAccountAdded(name, status);
    }

    updateAccountStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logAccountStatusUpdate(this.accounts[id].name, this.accounts[id].status);
    }
}