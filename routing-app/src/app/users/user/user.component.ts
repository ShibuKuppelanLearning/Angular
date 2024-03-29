import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private activeRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.user = { id: this.activeRouter.snapshot.params['id'], name: this.activeRouter.snapshot.params['name'] };
    this.activeRouter.params.subscribe((params: Params) => {
      this.user.id = +params["id"];
      this.user.name = params["name"];
    });
  }
}