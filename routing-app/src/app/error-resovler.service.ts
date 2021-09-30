import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Server } from './servers/model/server.model';
import { Observable } from 'rxjs';
import { ServersService } from './servers/service/servers.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorResovlerService implements Resolve<Server>{

  constructor(private serverService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    const server = this.serverService.getServer(+route.params['id']);
    if (server) {
      return server;
    } else {
      return new Server(0, '', '');
    }
  }
}
