import { Component, OnInit } from '@angular/core';

import { ServersService } from '../service/servers.service';
import { Server } from '../model/server.model';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.activeRoute.snapshot.data['server'];
    this.activeRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // this.setServerFromParams(this.activeRoute.snapshot.params);
    // this.activeRoute.params.subscribe((params: Params) => {
    //   this.setServerFromParams(params);
    // });
  }

  private setServerFromParams(params: Params) {
    const targetServer = this.serversService.getServer(+params['id']);
    if (targetServer) {
      this.server = targetServer;
    }
  }

  onEditServer() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute, queryParamsHandling: "preserve" });
  }
}