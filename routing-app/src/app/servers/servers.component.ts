import { Component, OnInit } from '@angular/core';
import { ServersService } from './service/servers.service';
import { Server } from './model/server.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: Server[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    // this.router.navigate(["servers"], { relativeTo: this.activatedRoute });
  }

}
