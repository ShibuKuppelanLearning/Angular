import { Injectable } from '@angular/core';
import { Server } from '../model/server.model';


@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private servers: Server[] = [
    new Server(1, 'Productionserver', 'online'),
    new Server(2, 'Testserver', 'offline'),
    new Server(3, 'Devserver', 'offline')];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
