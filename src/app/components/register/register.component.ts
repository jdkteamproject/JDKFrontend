import { Component, OnInit } from '@angular/core';
import { User } from "../../model/users/users.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public User : User = {
    id: null,
    email: '',
    username: '',
    password: '',
    reportedNum: null,
    region: '',
    category: '',
    favEvents: [],
    friends: [],
    notifications: [],
    admin: false,
    banned: false
  }

  constructor() { }

  ngOnInit() {
  }

}
