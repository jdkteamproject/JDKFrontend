import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { User } from "../../model/users/users.model";
import { loginUser } from "../../model/users/loginUser.model";
import { DataService } from "../../services/data.service";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUsers: User[];
  currentUserId: number;
  currentUser: User;
  

  private _baseUrl = "http://3.16.216.95:8085/cue/users/"
  
  constructor(
    private _auth: AuthenticationService,
    private _router: Router,
    private _duser: DataService) {           
  }

  ngOnInit() {
    // this.getAllUsers();
  }

  // getAllUsers(): void {
  //   this._duser.getAllUsers()
  //   .subscribe(allUsers => this.allUsers = allUsers);
  // }

  User: loginUser = {
    email: '',
    password: ''
  }
   
  loginUser(email: string, password: string) {
    this.User.email = email;
    this.User.password = password;
    console.log(this.User.email);
    console.log(this.User.password);
    this._duser.getId(this.User.email, this.User.password).subscribe(res => {
      console.log(res);
      this._duser.getUserById(res);
    })


    

    // this._auth.loginUser(this.User.email, this.User.password)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('email', this.User.email)
    //     console.log(res);
    //     this._router.navigate(['/Dashboard'])
        
    //   },
    //   err => console.log(err)
    // )
  }
}