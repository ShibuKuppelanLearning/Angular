import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // template: `
  //   <div app-server></div>
  //   <div app-server></div>
  // `,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName:string = 'Sample';
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverCreated:boolean = false;

  
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;    
    },2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
    this.serverCreated = true;
  }

  onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(){
    
  }
}
