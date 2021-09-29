import { Component, OnInit } from '@angular/core';
import { Server } from '../model/server.model';
import { ServersService } from '../service/servers.service';
import { ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-gaurd.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {  
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if ((+this.activeRouter.snapshot.queryParams['allowEdit']) === 1) {
      this.allowEdit = true;
    } else {
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
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activeRouter });
  }

  canDeactivate() : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    if(!this.allowEdit){
      return true;  
    }

    if((this.serverName!==this.server.name || this.serverStatus!==this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard your changes ?')
    }else{
      return true;
    }    
  }
}
