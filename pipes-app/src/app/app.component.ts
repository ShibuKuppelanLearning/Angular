import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStatus: Promise<string> = new Promise<string>((resolve, reject) => {
    setInterval(() => {
      resolve("stable");
    }, 3000);
  });

  servers: { name: string, instanceType: string, creationDate: Date, status: string }[] = [
    { name: 'Production', instanceType: 'medium', creationDate: new Date(1987, 5, 17), status: 'stable' },
    { name: 'User Database', instanceType: 'large', creationDate: new Date(2016, 1, 23), status: 'stable' },
    { name: 'Development Server', instanceType: 'small', creationDate: new Date(2018, 6, 7), status: 'offline' },
    { name: 'Testing Environmnet Server', instanceType: 'small', creationDate: new Date(2015, 9, 10), status: 'stable' }
  ];

  filterByStatus: string = '';

  getStatusClasses(server: { name: string, instanceType: string, creationDate: Date, status: string }) {
    return { 'list-group-item-success': server.status === 'stable', 'list-group-item-warning': server.status === 'offline', 'list-group-item-danger': server.status === 'critical' }
  }

  onAddServer() {
    this.servers.push({
      name: 'New Filter Server',
      instanceType: 'medium',
      creationDate: new Date(2021, 5, 17),
      status: 'stable'
    });
  }
}