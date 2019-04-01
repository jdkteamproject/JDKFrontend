import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  loginUserData = {email: " ", password: " "}

  constructor(private _auth: AuthenticationService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        // this._router.navigate(['Dashboard'])
        console.log(res);
        console.log(this.loginUserData);
      },
      err => console.log(err)
    )}
}