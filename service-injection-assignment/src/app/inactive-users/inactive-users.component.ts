import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inActiveUsers;
  }

  setToActive(id: number) {
    this.userService.setToActive(id);
  }
}
