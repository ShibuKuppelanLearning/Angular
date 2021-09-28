import { Component, OnInit } from '@angular/core';
import { Server } from '../model/server.model';
import { ServersService } from '../service/servers.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    if((+this.activeRouter.snapshot.queryParams['allowEdit']) === 1){
      this.allowEdit = true;
    }else{
      this.allowEdit = false;
    }
    
    this.setServerByParams(+this.activeRouter.snapshot.params['id']);
    this.activeRouter.queryParams.subscribe((params: Params) => {
      this.setServerByParams(+params['id']);;
    });
  }

  private setServerByParams(id: number) {
    const server = this.serversService.getServer(id);
    if (server) {
      this.server = server;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
