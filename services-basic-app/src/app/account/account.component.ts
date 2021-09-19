import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };

  @Input() id: number;

  @Output() statusChanged: EventEmitter<{ id: number, newStatus: string }> = new EventEmitter<{ id: number, newStatus: string }>();

  constructor() { }

  ngOnInit(): void {

  }

  onSetTo(newStatus: string) {
    const id: number = this.id;
    this.account.status = newStatus;
    this.statusChanged.emit({ id, newStatus });
    console.log('A server '+(this.account.name)+' status changed, new status : ' + newStatus);
  }
}
