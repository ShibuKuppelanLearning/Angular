import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor() { }

  ngOnInit(): void {

  }

  onCreateAccount(name: string, status: string): void {
    this.accountAdded.emit({ name, status });
    console.log('A new server was added with name : '+name+' and status : '+status);
  }
}
