import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeStateChangeCount: number = 0;
  inActiveStateChangeCount: number = 0;

  constructor() {

  }

  onActiveStateChange() {
    this.activeStateChangeCount++;
    console.log("activeStateChangeCount :" + this.activeStateChangeCount);
  }

  onInActiveStateChange() {
    this.inActiveStateChangeCount++;
    console.log("inActiveStateChangeCount :" + this.inActiveStateChangeCount);
  }
}
