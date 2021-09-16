import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
    p{
      color:red;
    }
  `
  ]
})
export class EvenComponent implements OnInit {
  @Input() evenNumber: number;
  constructor() { }

  ngOnInit(): void {
  }

}
