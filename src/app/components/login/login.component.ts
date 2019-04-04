import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from "../../model/users/users.model";
import { loginUser } from "../../model/users/loginUser.model";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUsers: User[];
  currentUserId: number;
  currentUser: User;

  constructor(
    private _router: Router,
    private _duser: DataService) {
  }

  ngOnInit() {
  }

  User: loginUser = {
    email: '',
    password: '',
    admin: false
  }

  loginUser(email: string, password: string) {
    this.User.email = email;
    this.User.password = password;
    console.log(this.User.email);
    console.log(this.User.password);
    this._duser.getId(this.User.email, this.User.password).subscribe(res => {
      if (res != -1) {
        console.log(res);
        console.log('success!');
        this._router.navigate(['/Dashboard'])
        window.localStorage.setItem('userId', res.toString())
      } else if (res == -1) {
        console.log(res);
        console.log('invalid user!')
        this._router.navigate(['/'])
      }
    })
  }
}