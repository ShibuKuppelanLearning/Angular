import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [1, 3, 5];
  evenNumbers: number[] = [2, 4, 6];
  showOddOnly: boolean = false;
}
