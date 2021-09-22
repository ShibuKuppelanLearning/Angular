import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers: string[] = ['Max', 'John'];
  inActiveUsers: string[] = ['James', 'Rusov'];

  constructor(private counterService:CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
    this.counterService.onActiveStateChange();

  }

  setToInActive(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onInActiveStateChange();
  }
}