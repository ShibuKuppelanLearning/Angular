import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit-app',
  templateUrl: './cockpit-app.component.html',
  styleUrls: ['./cockpit-app.component.css']
})
export class CockpitAppComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerNameElement: HTMLInputElement) {
    console.log("New Server Name : "+newServerNameElement.value);
    this.serverCreated.emit({ name: newServerNameElement.value, content: this.newServerContent });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ name: this.newServerName, content: this.newServerContent });
  }
}
