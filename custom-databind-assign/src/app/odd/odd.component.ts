import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [
    `
    p{
      color:green;
    }
    `
  ]
})
export class OddComponent implements OnInit {

  @Input() oddNumber: number;

  constructor() { }

  ngOnInit(): void {

  }

}
