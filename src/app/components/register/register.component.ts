import { Component, OnInit } from '@angular/core';
import { User } from "../../model/users/users.model";
import { userEvent } from 'src/app/model/userEvent/userEvent.model';
import { userNotification } from 'src/app/model/userNotification/userNotification.model';

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
    notifications: [],
    admin: false,
    banned: false
  }

  registerUser(
    email: string, 
    username: string, 
    password: string, 
    reportedNum: number, 
    region: string,
    category: string,
    favEvents: userEvent[],
    notifications: userNotification[],
    admin: false,
    banned: false){

     }

  constructor() { }

  ngOnInit() {
  }

}
