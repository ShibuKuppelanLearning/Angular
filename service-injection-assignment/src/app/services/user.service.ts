import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: string[] = ['Max', 'John'];
  inActiveUsers: string[] = ['James', 'Rusov'];

  constructor() { }

  setToActive(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);

  }

  setToInActive(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}