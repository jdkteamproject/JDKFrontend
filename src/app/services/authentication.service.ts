import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = "http://3.16.216.95:8085/cue/users";
  private _loginUrl = "http://3.16.216.95:8085/cue/login?email=newPerson@gmail.com&password=password1";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(email:string, password:string){
    return this.http.post<any>(this._loginUrl, {email, password})
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate([''])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}