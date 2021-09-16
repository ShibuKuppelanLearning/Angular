import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  title = 'custom-databind-assign';

  onIntervalFired(lastNumber: number) {
    if(lastNumber%2===0){
      this.evenNumbers.push(lastNumber);
    }else{
      this.oddNumbers.push(lastNumber);
    }
  }
}
