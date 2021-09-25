import { Component, OnInit } from '@angular/core';

import { ServersService } from '../service/servers.service';
import { Server } from '../model/server.model';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    const targetServer = this.serversService.getServer(1);
    if (targetServer) {
      this.server = targetServer;
    }
  }
}