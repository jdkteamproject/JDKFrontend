import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const HttpOptions = {
  headers: new HttpHeaders({ "Content-type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginId: any;
  private _registerUrl = "http://3.16.216.95:8085/cue/users";
  private _loginUrl = "http://3.16.216.95:8085/cue/login?email=newPerson@gmail.com&password=password1";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(email: string, password: string){
    this.loginId=JSON.stringify({"email": email, "password": password});
    return this.http.post<number>(this._loginUrl, this.loginId, HttpOptions)
    
  }

  logoutUser(){
    localStorage.removeItem('currentuser');
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return localStorage.getItem('token')
  }

  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}