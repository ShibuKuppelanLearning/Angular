import { Component } from '@angular/core';

@Component({
    // selector:"app-server",
    selector:'[app-server]',
    templateUrl:"./server.component.html",
    styles:['h2{color:chocolate}']
})
export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}